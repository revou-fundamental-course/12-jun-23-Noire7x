const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const konversiBtn = document.getElementById("konversiBtn");
const resetBtn = document.getElementById("resetBtn");
const reverseBtn = document.getElementById("reverseBtn");
const hasilBox = document.getElementById("hasilBox");
const hasilText = document.getElementById("hasilText");
const caraText = document.getElementById("caraText");

/*membuat fungsi untuk konversi celsius ke fahrenheit */
function celsiusToFahrenheit(celsius) {
	const fahrenheit = (celsius * 1.8) + 32;
	const caraKalkulasi = `${celsius} &deg;C x 1.8 + 32 = ${fahrenheit.toFixed(2)} &deg;F`;
	return {hasil: fahrenheit.toFixed(2) + " &deg;F", caraKalkulasi: caraKalkulasi};
}

/*membuat fungsi untuk konversi fahrenheit ke celsius */
function fahrenheitToCelsius(fahrenheit) {
	const celsius = (fahrenheit - 32) / 1.8;
	const caraKalkulasi = `(${fahrenheit} &deg;F - 32) / 1.8 = ${celsius.toFixed(2)} &deg;C`;
	return {hasil: celsius.toFixed(2) + " &deg;C", caraKalkulasi: caraKalkulasi};
}

/*membuat fungsi untuk konversi dengan inputan */
function konversi() {
	let hasil = "";
	let caraKalkulasi = "";
	if (celsiusInput.value !== "" && fahrenheitInput.value !== "") {
		alert("Masukkan hanya satu suhu.");
	} else if (celsiusInput.value !== "") {
		const celsius = parseFloat(celsiusInput.value);
		if (isNaN(celsius)) {
			alert("Masukkan angka yang valid.");
		} else {
			const konversi = celsiusToFahrenheit(celsius);
			hasil = konversi.hasil;
			caraKalkulasi = konversi.caraKalkulasi;
		}
	} else if (fahrenheitInput.value !== "") {
		const fahrenheit = parseFloat(fahrenheitInput.value);
		if (isNaN(fahrenheit)) {
			alert("Masukkan angka yang valid.");
		} else {
			const konversi = fahrenheitToCelsius(fahrenheit);
			hasil = konversi.hasil;
			caraKalkulasi = konversi.caraKalkulasi;
		}
	} else {
		alert("Masukkan suhu yang ingin dikonversi.");
	}
	if (hasil !== "") {
		hasilText.innerHTML = hasil;
		caraText.innerHTML = "Cara kalkulasi: " + caraKalkulasi;
		hasilBox.classList.add("show");
	} else {
		hasilBox.classList.remove("show");
	}
}

/* membuat fungsi reset */
function reset() {
	celsiusInput.value = "";
	fahrenheitInput.value = "";
	hasilBox.classList.remove("show");
}

/* membuat fungsi reverse */
function reverse() {
	const celsius = celsiusInput.value;
	const fahrenheit = fahrenheitInput.value;
	celsiusInput.value = fahrenheit;
	fahrenheitInput.value = celsius;
}

konversiBtn.addEventListener("click", konversi);
resetBtn.addEventListener("click", reset);
reverseBtn.addEventListener("click", reverse);