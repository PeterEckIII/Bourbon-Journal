import React, { useEffect, useRef, forwardRef } from "react";
import type { MutableRefObject } from "react";

interface IProps {
  indeterminate?: boolean;
  name: string;
}

function useCombinedRefs(...refs: any[]): MutableRefObject<any> {
  const targetRef = useRef();

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}

type InputProps = JSX.IntrinsicElements["input"] & IProps;

type MyRef = HTMLInputElement;

export const Checkbox = forwardRef<MyRef, InputProps>(
  ({ indeterminate, name, ...rest }, ref: React.Ref<HTMLInputElement>) => {
    const defaultRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, defaultRef);

    useEffect(() => {
      if (combinedRef?.current) {
        combinedRef.current.indeterminate = indeterminate ?? false;
      }
    }, [combinedRef, indeterminate]);

    return (
      <input
        type="checkbox"
        name={name}
        ref={combinedRef}
        id={`${name}-checkbox`}
        {...rest}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";
