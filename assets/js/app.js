function reformatLicenseKey() {
  const licenseKey = document.getElementById("licenseKey").value.toUpperCase();
  const groupSize = parseInt(document.getElementById("groupSize").value);
  const resultElement = document.getElementById("result");

  const strippedKey = licenseKey.split("-").join("");
  const firstGroupSize = strippedKey.length % groupSize || groupSize;
  let reformattedKey = strippedKey.substring(0, firstGroupSize);

  for (let i = firstGroupSize; i < strippedKey.length; i += groupSize) {
    reformattedKey += "-" + strippedKey.substring(i, i + groupSize);
  }

  resultElement.textContent = reformattedKey;
}
