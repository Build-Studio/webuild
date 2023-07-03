import classnames from "tailwindcss-classnames";
import { useState } from "react";

const inputs = [
  { value: "name", label: "FULL NAME" },
  { value: "companyName", label: "COMPANY NAME" },
  { value: "email", label: "EMAIL ADDRESS" },
  { value: "phone", label: "PHONE NUMBER" },
  { value: "message", label: "YOUR MESSAGE...", type: "textarea" },
];

export default function ContactUsForm() {
  const [state, setState] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const onSubmit = async (e) => {
    e?.preventDefault?.();

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(state),
    });
  };

  return (
    <div>
      <h3 className={classnames("mb-14", "font-bold")}>CONTACT US</h3>
      <div>
        <form onSubmit={onSubmit}>
          <div
            className={classnames(
              "grid",
              "grid-cols-2",
              "gap-x-6",
              "gap-y-4",
              "text-white"
            )}
          >
            {inputs.map((item) => (
              <div
                key={item.value}
                className={item.type === "textarea" ? "col-span-2" : ""}
                value={state[item.value]}
                onChange={(e) =>
                  setState({ ...state, [item.value]: e?.target?.value })
                }
              >
                {item.type === "textarea" ? (
                  <textarea
                    required
                    placeholder={item.label}
                    className={classnames(
                      "px-2",
                      "py-3",
                      "border-[2px]",
                      "border-white",
                      "rounded-md",
                      "bg-gray-700",
                      "w-full",
                      "focus:outline-0",
                      "focus:border-primary",
                      "min-h-[150px]",
                      "font-bold"
                    )}
                    value={state[item.value]}
                    onChange={(e) =>
                      setState({ ...state, [item.value]: e?.target?.value })
                    }
                  />
                ) : (
                  <input
                    required
                    placeholder={item.label}
                    className={classnames(
                      "px-2",
                      "py-3",
                      "border-[2px]",
                      "border-white",
                      "rounded-md",
                      "bg-gray-700",
                      "w-full",
                      "focus:outline-0",
                      "focus:border-primary",
                      "font-bold"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
          <div className={classnames("flex", "justify-end")}>
            <button
              type="submit"
              className={classnames(
                "px-4",
                "py-2",
                "bg-primary",
                "text-white",
                "font-bold",
                "rounded-md",
                "mt-3",
                "hover:bg-secondary",
                "transition",
                "duration-300"
              )}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
