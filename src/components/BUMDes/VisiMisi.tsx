const VisiMisi = () => {
  return (
    <div className="max-w-6xl px-4 mx-auto py-4 space-y-4">
      <h1 className="text-2xl font-semibold">Visi & Misi</h1>
      <div className="p-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 text-white space-y-2">
        <h2 className="text-center text-xl font-semibold">Visi</h2>
        <ul>
          <li className="text-center">
            - BERSAMA BUMDES MASYARAKAT KUTAMUKTI SEJAHTERA
          </li>
          <li className="text-center">- MEMBANGUN KEWIRAUSAHAAN MANDIRI</li>
        </ul>
      </div>
      <div className="p-8 rounded-lg bg-gradient-to-br from-emerald-200 to-emerald-50 space-y-2">
        <h2 className="text-center text-xl font-semibold">Misi</h2>
        <p className="text-center">
          Misi adalah rumusan umum mengenai upaya-upaya yang akan dilaksanakan
          untuk mewujudkan visi. Untuk meraih Visi Desa seperti yang sudah
          dijabarkan di atas, dengan mempertimbangan potensi dan hambatan baik
          internal maupun eksternal, maka tersusun Misi Desa sebagai berikut:
        </p>
        <ul>
          <li className="text-center">
            - Menigkatkan tarap hidup masyarakat dengan kemandirian usaha
          </li>
          <li className="text-center">
            - Menciptakan lapangan kerja dengan mengelola potensi yang ada.
          </li>
          <li className="text-center">
            - Membentuk kepribadian yang mandiri dengan mengacu pada prinsip usaha.
          </li>
          <li className="text-center">
            - Menerapkan gaya hidup yang berlandaskan ekonomi dan usaha.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VisiMisi;
