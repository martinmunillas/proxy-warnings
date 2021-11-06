type Proxy = (
  emiter: () => void,
  warning: string | Error,
  ...otherWarningValues: (string | Function | NodeJS.EmitWarningOptions)[]
) => void;

export const proxyWarnings = (proxy: Proxy) => {
  const emitWarning = process.emitWarning;
  process.emitWarning = (warning: string, ...values: any[]) => {
    const emit = () => emitWarning(warning, ...values);
    proxy(emit, warning, ...values);
    if (warning.includes("NODE_TLS_REJECT_UNAUTHORIZED")) {
      return;
    }
  };
};
