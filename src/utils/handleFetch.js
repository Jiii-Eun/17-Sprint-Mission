export const handleFetch = async ({
  fetchFn,
  onSuccess,
  onError,
  errorMessage,
}) => {
  try {
    const result = await fetchFn();

    if (result) {
      onSuccess?.(result);
    } else {
      throw new Error(errorMessage || "요청 실패");
    }
  } catch (err) {
    console.error("요청 실패:", err.message);
    onError?.(errorMessage || err.message);
  }
};
