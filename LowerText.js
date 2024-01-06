javascript: (async function () {
  const clipText = await navigator.clipboard.readText();
  const lowerText = clipText.toLowerCase();
  navigator.clipboard.writeText(lowerText);
})();
