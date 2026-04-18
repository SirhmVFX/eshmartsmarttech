import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

type Theme = "dark" | "light";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  theme?: Theme;
  error?: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  theme?: Theme;
  error?: string;
  children: React.ReactNode;
};

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  theme?: Theme;
  error?: string;
};

function FieldLabel({ label, theme }: { label: string; theme: Theme }) {
  return (
    <label className={`field-label ${theme === "dark" ? "field-label-dark" : "field-label-light"}`}>
      {label}
    </label>
  );
}

export function FormInput({ label, theme = "dark", error, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <FieldLabel label={label} theme={theme} />}
      <input
        className={`input-base ${theme === "dark" ? "input-dark" : "input-light"} ${props.disabled ? "input-disabled" : ""} ${className}`}
        {...props}
      />
      {error && <p className="text-red-400 text-xs mt-0.5">{error}</p>}
    </div>
  );
}

export function FormSelect({ label, theme = "dark", error, className = "", children, ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <FieldLabel label={label} theme={theme} />}
      <select
        className={`input-base ${theme === "dark" ? "input-dark" : "input-light"} appearance-none ${className}`}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-red-400 text-xs mt-0.5">{error}</p>}
    </div>
  );
}

export function FormTextarea({ label, theme = "dark", error, className = "", ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <FieldLabel label={label} theme={theme} />}
      <textarea
        className={`input-base ${theme === "dark" ? "input-dark" : "input-light"} resize-none ${className}`}
        {...props}
      />
      {error && <p className="text-red-400 text-xs mt-0.5">{error}</p>}
    </div>
  );
}
