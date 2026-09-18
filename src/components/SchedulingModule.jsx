import { useState } from "react";
import { CalendarDays, Clock3, CheckCircle2, Loader2 } from "lucide-react";

// Helper function to format today's date into the required HTML date input string (YYYY-MM-DD)
function getTodayString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/* 🛠️ NEW HELPER: Converts military time (24hr) to readable regular time (12hr AM/PM EST) */
function convertTo12HourEST(timeString) {
  if (!timeString) return "";
  const [hourStr, minStr] = timeString.split(":");
  let hours = parseInt(hourStr, 10);
  const ampm = hours >= 12 ? "PM" : "AM";
  
  hours = hours % 12;
  hours = hours ? hours : 12; // Converts '0' hours to '12'
  
  return `${hours}:${minStr} ${ampm} EST`;
}

// Core business hour routing map based on native JavaScript getDay() values (0 = Sunday, 1 = Monday, etc.)
const BUSINESS_HOURS = {
  0: { label: "Closed", closed: true },
  1: { open: "11:00", close: "21:00", label: "Monday: 11 AM – 9 PM" },
  2: { open: "11:00", close: "21:00", label: "Tuesday: 11 AM – 9 PM" },
  3: { open: "11:00", close: "17:00", label: "Wednesday: 11 AM – 5 PM" },
  4: { open: "11:00", close: "21:00", label: "Thursday: 11 AM – 9 PM" },
  5: { open: "11:00", close: "17:00", label: "Friday: 11 AM – 5 PM" },
  6: { open: "10:00", close: "14:00", label: "Saturday: 10 AM – 2 PM" }
};

export default function SchedulingModule({ t, locked, studentInfo }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [sending, setSending] = useState(false);
  const [scheduleError, setScheduleError] = useState("");

  // Determine open hours based on the chosen day
  let dayHours = null;
  if (selectedDate) {
    const dateParts = selectedDate.split("-");
    const parsedDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    const dayOfWeek = parsedDate.getDay();
    dayHours = BUSINESS_HOURS[dayOfWeek];
  }

  // Handle live date input adjustments and enforce Sunday restrictions
  function handleDateChange(val) {
    setSelectedDate(val);
    setSelectedTime(""); 
    setScheduleError("");

    if (!val) return;
    const dateParts = val.split("-");
    const parsedDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    
    if (parsedDate.getDay() === 0) {
      setScheduleError("We are closed on Sundays. Please select another day.");
    }
  }

  // Handle live time input validation against current business hours configuration
  function handleTimeChange(val) {
    setSelectedTime(val);
    setScheduleError("");

    if (!dayHours || dayHours.closed) return;

    const [inputH, inputM] = val.split(":").map(Number);
    const [openH, openM] = dayHours.open.split(":").map(Number);
    const [closeH, closeM] = dayHours.close.split(":").map(Number);

    const inputTotal = inputH * 60 + inputM;
    const openTotal = openH * 60 + openM;
    const closeTotal = closeH * 60 + closeM;

    if (inputTotal < openTotal || inputTotal > closeTotal) {
      setScheduleError(`Selected time is outside business hours for this day (${dayHours.label}).`);
    }
  }

  async function handleConfirm(e) {
    e.preventDefault();
    if (!selectedDate || !selectedTime || scheduleError) return;
    
    setSending(true);

    // 🛠️ Generate the converted 12-hour string format for the email payload
    const formatted12HourTime = convertTo12HourEST(selectedTime);

    try {
      const response = await fetch("https://formsubmit.co/0677558@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `⚡ New Lead & Campus Visit Booked: ${studentInfo?.firstName || "Student"} ${studentInfo?.lastName || ""}`,
          "First Name": studentInfo?.firstName || "N/A",
          "Last Name": studentInfo?.lastName || "N/A",
          "Email Address": studentInfo?.email || "N/A",
          "Phone Number": studentInfo?.phone || "N/A",
          "License Program Intended": studentInfo?.licenseProgram || "N/A",
          "Optional Certification": studentInfo?.certification || "None Selected",
          "Optional Massage CE": studentInfo?.massageCE || "None Selected",
          "📅 Requested Tour Date": selectedDate,
          "⏰ Requested Tour Time": formatted12HourTime, /* 🌟 SENT AS 12-HOUR REGULAR TIME */
          _template: "box" /* 🌟 MODERNISED CLEAN LOOKING BOX TEMPLATE OVER NARROW TABLE */
        }),
      });

      if (response.ok) {
        setConfirmed(true);
      } else {
        alert("Submission failed. FormSubmit requires one-time address verification confirmation.");
      }
    } catch (error) {
      console.error("FormSubmit Connection Error:", error);
      alert("Network dropped. Check server status.");
    } finally {
      setSending(false);
    }
  }

  if (confirmed) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-bg-surface p-10 text-center animate-fadeIn">
        <CheckCircle2 className="h-11 w-11 text-primary animate-pulse" />
        <h3 className="text-xl font-medium text-text-main">{t.scheduler?.confirmedTitle || "Application Submitted!"}</h3>
        <p className="max-w-xs text-sm leading-relaxed text-text-muted">
          {t.scheduler?.confirmedBody || "Your registration choices and campus tour request have been sent successfully. An admissions counselor will reach out shortly."}
        </p>
        <div className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mt-2">
          Tour Date: {selectedDate} &middot; Time: {convertTo12HourEST(selectedTime)}
        </div>
      </div>
    );
  }

  const isSubmitDisabled = !selectedDate || !selectedTime || !!scheduleError || sending;

  return (
    <div className={locked ? "pointer-events-none select-none opacity-40 transition-opacity" : "transition-opacity"} aria-hidden={locked}>
      <div className="flex items-center gap-2">
        <CalendarDays className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-medium text-text-main">{t.scheduler?.title || "Choose Your Tour Window"}</h3>
      </div>
      <p className="mt-1 text-sm text-text-muted">{t.scheduler?.subtitle || "Select any day and hour matching school operations."}</p>

      <div className="mt-6">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
          1. Pick Date (Today or Ahead)
        </label>
        <input 
          type="date" 
          value={selectedDate}
          min={getTodayString()} 
          onChange={(e) => handleDateChange(e.target.value)}
          required
          className="w-full rounded-xl border border-primary/20 bg-bg-main px-4 py-3 text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all shadow-sm"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
          <span className="flex items-center gap-2"><Clock3 className="h-3.5 w-3.5" /> 2. Pick Time</span>
          {dayHours && !dayHours.closed && (
            <span className="text-[10px] font-medium text-primary normal-case font-body">{dayHours.label}</span>
          )}
        </label>
        <input 
          type="time" 
          value={selectedTime}
          onChange={(e) => handleTimeChange(e.target.value)}
          disabled={!selectedDate || (dayHours && dayHours.closed)}
          required
          className="w-full rounded-xl border border-primary/20 bg-bg-main px-4 py-3 text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
        />
      </div>

      {scheduleError && (
        <p className="mt-4 text-xs font-medium text-red-500 bg-red-500/5 border border-red-500/10 rounded-lg p-3 animate-fadeIn">
          ⚠️ {scheduleError}
        </p>
      )}

      <button
        type="button"
        onClick={handleConfirm}
        disabled={isSubmitDisabled}
        className="mt-8 w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-text-main tracking-wide transition-all duration-200 hover:bg-primary-light hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100 shadow-sm flex items-center justify-center gap-2"
      >
        {sending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Processing Application...
          </>
        ) : (
          t.scheduler?.confirm || "Submit Complete Application"
        )}
      </button>
    </div>
  );
}
