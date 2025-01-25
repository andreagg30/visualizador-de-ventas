import { useState } from 'react';
import { ERRORS } from '../constants';

function useCopy() {
  const [copied, setCopied] = useState(false);

  async function handleCopy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(ERRORS.copy, err);
    }
  }

  return {
    copied,
    handleCopy,
  };
}

export default useCopy;
