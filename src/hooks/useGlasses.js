const useGlassess = async () => {
  const res = await fetch("/api/glasses.json");
  const glasses = await res.json();

  return { glasses };
};

export default useGlassess;
