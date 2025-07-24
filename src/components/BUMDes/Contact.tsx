import Link from "next/link";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <table>
          <tbody>
            <tr>
              <td className="px-4 py-2">Alamat</td>
              <td className="px-4 py-2">:</td>
              <td className="px-4 py-2">
                DESA KUTAMUKTI KECAMATAN KUTAWALUYA KABUPATEN KARAWANG
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">CP</td>
              <td className="px-4 py-2">:</td>
              <td className="px-4 py-2">
                <Link href={`https://wa.me/6285811144429`} target="_blank">
                  085811144429
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Kedudukan</td>
              <td className="px-4 py-2">:</td>
              <td className="px-4 py-2">Kantor Desa Kutamukti</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
