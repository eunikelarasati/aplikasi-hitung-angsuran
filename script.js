function hitung() {
  let otr = parseFloat(document.getElementById("otr").value);
  let dpPersen = parseFloat(document.getElementById("dp").value);
  let bulan = parseInt(document.getElementById("bulan").value);

  let dpRupiah = otr * (dpPersen / 100);

  // pokok hutang
  let pokokHutang = otr - dpRupiah;

  // bunga sesuai jangka waktu
  let bunga = 0;
  if (bulan <= 12) {
    bunga = 0.12; 
  } else if (bulan >12 &&  bulan <= 24) {
    bunga = 0.14; 
  } else {
    bunga = 0.165; 
  }

  // total angsuran per bulan
  let totalAngsuran = (pokokHutang + (pokokHutang * bunga)) / bulan;

  document.getElementById("hasil").innerHTML = `
    <table style="border-collapse: collapse; width: 100%; max-width: 400px;">
      <tr>
        <td>Harga OTR</td><td>:</td>
        <td>Rp ${otr.toLocaleString()}</td>
      </tr>
      <tr>
        <td>DP (${dpPersen}%)</td><td>:</td>
        <td>Rp ${dpRupiah.toLocaleString()}</td>
      </tr>
      <tr>
        <td>Pokok Hutang</td><td>:</td>
        <td>Rp ${pokokHutang.toLocaleString()}</td>
      </tr>
      <tr>
        <td>Bunga</td><td>:</td>
        <td>${(bunga * 100).toFixed(1)}%</td>
      </tr>
    </table>
    <hr>
    <b style="color: red; font-size: 1.2em;">Angsuran per bulan: Rp ${totalAngsuran.toLocaleString()}</b>
  `;
}
