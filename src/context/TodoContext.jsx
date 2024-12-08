import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    // Kategori: Tugas Sekolah
    {
      id: 1,
      category: "Tugas Sekolah",
      subcategories: [
        {
          id: 1,
          subcategory: "Tugas Kimia",
          date: "Jumat, 8 Desember 2024",
          description:
            "Selesaikan laporan praktikum Kimia Bab 'Asam dan Basa'.",
          tasks: [
            { id: 1, task: "Menulis latar belakang laporan", completed: false },
            { id: 2, task: "Menghitung hasil eksperimen", completed: false },
            {
              id: 3,
              task: "Membuat grafik pH dari data eksperimen",
              completed: true,
            },
            { id: 4, task: "Melakukan proofreading laporan", completed: false },
            {
              id: 5,
              task: "Upload ke Google Classroom sebelum jam 23:59",
              completed: false,
            },
          ],
        },
        {
          id: 2,
          subcategory: "Tugas Fisika",
          date: "Jumat, 8 Desember 2024",
          description:
            "Pelajari materi dinamika rotasi dan kerjakan soal untuk persiapan ujian.",
          tasks: [
            {
              id: 1,
              task: "Membaca Bab 'Dinamika Rotasi' dari buku Fisika halaman 102-120",
              completed: true,
            },
            {
              id: 2,
              task: "Menonton video pembelajaran di YouTube",
              completed: false,
            },
            {
              id: 3,
              task: "Mengerjakan latihan soal nomor 1-10 di buku tugas",
              completed: false,
            },
            {
              id: 4,
              task: "Konsultasi dengan guru jika ada soal yang tidak dimengerti",
              completed: false,
            },
          ],
        },
      ],
    },

    // Kategori: Tugas Kelompok
    {
      id: 2,
      category: "Tugas Kelompok",
      subcategories: [
        {
          id: 1,
          subcategory: "Tugas Praktek",
          date: "Jumat, 8 Desember 2024",
          description:
            "Membuat proyek poster interaktif untuk mata pelajaran Teknologi Informasi.",
          tasks: [
            {
              id: 1,
              task: "Membagi tugas antar anggota kelompok",
              completed: true,
            },
            {
              id: 2,
              task: "Mencari referensi desain poster di Canva",
              completed: false,
            },
            {
              id: 3,
              task: "Membuat draft konten poster tentang teknologi ramah lingkungan",
              completed: false,
            },
            {
              id: 4,
              task: "Revisi poster berdasarkan masukan dari semua anggota kelompok",
              completed: false,
            },
            {
              id: 5,
              task: "Cetak poster di toko percetakan sebelum hari Senin",
              completed: false,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
