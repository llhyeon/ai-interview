import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormField {
  label: string;
  inputType?: string;
  placeholder: string;
  button?: boolean;
  buttonText?: string;
  onClick?: () => void;

  register?: UseFormRegisterReturn;
  error?: string;

  buttonDisabled?: boolean;
}

function FormField({
  label,
  inputType = "text",
  placeholder,
  button = false,
  buttonText,
  onClick,
  register,
  error,
  buttonDisabled = false,
}: FormField) {
  const id = useId();
  return (
    <div className="space-y-1">
      <Label className="text-xs" htmlFor={id}>
        {label}
      </Label>
      <div className="flex gap-4">
        <Input
          className="placeholder:text-xs"
          id={id}
          type={inputType}
          placeholder={placeholder}
          {...register}
        />
        {button && (
          <Button
            className="hover:bg-blue-800 cursor-pointer transition-colors duration-300"
            type="button"
            onClick={onClick}
            disabled={buttonDisabled}>
            {buttonText}
          </Button>
        )}
      </div>
      {error && <p className="text-[10px] text-red-500 ml-2">{error}</p>}
    </div>
  );
}

export default FormField;
