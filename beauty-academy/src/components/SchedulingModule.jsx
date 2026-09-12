import { useState } from "react";
import { CalendarDays, Clock3, CheckCircle2 } from "lucide-react";

const TIME_SLOTS = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];

function getUpcomingDays(count) {
  const days = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);

  while (days.length < count) {
    if (cursor.getDay() !== 0) {
      days.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

export default function SchedulingModule({ t, locked }) {
  const [days] = useState(() => getUpcomingDays(8));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const dayFormatter = new Intl.DateTimeFormat(undefined, { weekday: "short", month: "short", day: "numeric" });

  function handleConfirm() {
    if (!selectedDate || !selectedTime) return;
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-bg-surface p-10 text-center">
        <CheckCircle2 className="h-11 w-11 text-primary" />
        <h3 className="text-xl font-medium text-text-main">{t.scheduler.confirmedTitle}</h3>
        <p className="max-w-xs text-sm leading-relaxed text-text-muted">{t.scheduler.confirmedBody}</p>
        <p className="text-sm font-medium text-primary">
          {dayFormatter.format(selectedDate)} &middot; {selectedTime}
        </p>
        <button
          onClick={() => {
            setConfirmed(false);
            setSelectedDate(null);
            setSelectedTime(null);
          }}
          className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
        >
          {t.scheduler.startOver}
        </button>
      </div>
    );
  }

  return (
    <div className={locked ? "pointer-events-none select-none" : ""} aria-hidden={locked}>
      <div className="flex items-center gap-2">
        <CalendarDays className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-medium text-text-main">{t.scheduler.title}</h3>
      </div>
      <p className="mt-1 text-sm text-text-muted">{t.scheduler.subtitle}</p>

      <p className="mt-6 text-xs font-medium uppercase tracking-[0.12em] text-text-muted">
        {t.scheduler.pickDate}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {days.map((day) => {
          const isActive = selectedDate && day.toDateString() === selectedDate.toDateString();
          return (
            <button
              key={day.toISOString()}
              type="button"
              onClick={() => setSelectedDate(day)}
              className={`rounded-lg border px-3.5 py-2 text-xs font-medium transition-colors ${
                isActive
                  ? "border-primary bg-primary text-bg-main"
                  : "border-primary/20 bg-bg-main text-text-main hover:border-primary/50"
              }`}
            >
              {dayFormatter.format(day)}
            </button>
          );
        })}
      </div>

      <p className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-text-muted">
        <Clock3 className="h-3.5 w-3.5" /> {t.scheduler.pickTime}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {TIME_SLOTS.map((slot) => (
          <button
            key={slot}
            type="button"
            onClick={() => setSelectedTime(slot)}
            className={`rounded-lg border px-3.5 py-2 text-xs font-medium transition-colors ${
              selectedTime === slot
                ? "border-primary bg-primary text-bg-main"
                : "border-primary/20 bg-bg-main text-text-main hover:border-primary/50"
            }`}
          >
            {slot}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={handleConfirm}
        disabled={!selectedDate || !selectedTime}
        className="mt-8 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-bg-main transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-40"
      >
        {t.scheduler.confirm}
      </button>
    </div>
  );
}
