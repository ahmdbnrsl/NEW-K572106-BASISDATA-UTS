-- CreateTable
CREATE TABLE "Dosen" (
    "nidn" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "bidang_keahlian" TEXT,
    "email" TEXT,

    CONSTRAINT "Dosen_pkey" PRIMARY KEY ("nidn")
);

-- CreateTable
CREATE TABLE "Mahasiswa" (
    "nim" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "prodi" TEXT,
    "angkatan" INTEGER,

    CONSTRAINT "Mahasiswa_pkey" PRIMARY KEY ("nim")
);

-- CreateTable
CREATE TABLE "MataKuliah" (
    "kode_mk" TEXT NOT NULL,
    "nama_mk" TEXT NOT NULL,
    "sks" INTEGER NOT NULL,
    "semester" INTEGER NOT NULL,

    CONSTRAINT "MataKuliah_pkey" PRIMARY KEY ("kode_mk")
);

-- CreateTable
CREATE TABLE "Nilai" (
    "id_nilai" SERIAL NOT NULL,
    "nilai" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "kode_mk" TEXT NOT NULL,

    CONSTRAINT "Nilai_pkey" PRIMARY KEY ("id_nilai")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id_admin" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id_admin")
);

-- AddForeignKey
ALTER TABLE "Nilai" ADD CONSTRAINT "Nilai_nim_fkey" FOREIGN KEY ("nim") REFERENCES "Mahasiswa"("nim") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nilai" ADD CONSTRAINT "Nilai_kode_mk_fkey" FOREIGN KEY ("kode_mk") REFERENCES "MataKuliah"("kode_mk") ON DELETE RESTRICT ON UPDATE CASCADE;
