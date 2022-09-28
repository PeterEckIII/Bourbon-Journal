import { useIsSubmitting } from "remix-validated-form";

export default function SubmitButton() {
  const isSubmitting = useIsSubmitting();
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
}
