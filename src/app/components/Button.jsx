import { forwardRef, useRef, useEffect } from "react";
const Button = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;
  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <button type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
});

export default Button;
