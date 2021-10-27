-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Waktu pembuatan: 27 Okt 2021 pada 11.39
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notifdb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `akses_token`
--

CREATE TABLE `akses_token` (
  `id_akses_token` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `access_token` text NOT NULL,
  `ip_address` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `akses_token`
--

INSERT INTO `akses_token` (`id_akses_token`, `id_user`, `access_token`, `ip_address`) VALUES
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDQ3MzE0MSwiZXhwIjoxNjM0NDc1NTQxfQ.9VAMzhUw-eMibhd61T365NvPWiVkaWflpVS-BD3sn9c', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDQ3MzE3OSwiZXhwIjoxNjM0NDc1NTc5fQ.QrisX4LturLOhVsN_3RTEV1nbdZCP4cL-LVlPg6fWhY', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDQ3MzIyNiwiZXhwIjoxNjM0NDc1NjI2fQ.3YVgNYDk5H7oVSpL8Hj7e5-zwlkc91kbbvUktwNA8VM', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDQ3MzY2NywiZXhwIjoxNjM0NDc2MDY3fQ.m0LdKSO9RuhMsyPEZ7OI5NEQhMGZRQgYa94glrW0cR4', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDQ3NDAyNCwiZXhwIjoxNjM0NDc2NDI0fQ.HXusaqfOBe3Dc1N7p95MMYtK6jpuQHtTFUt376BnuQ8', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDQ3NDA4NiwiZXhwIjoxNjM0NDc2NDg2fQ.AzVOgTe-3sEWGccehGYvLWCCWbezIewc9_UoOsVtubw', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDQ3NDExNSwiZXhwIjoxNjM0NDc2NTE1fQ.Mct0y25XfLyLYtU5yUI_zsCmN8v1O4fpuiLHszmoUh0', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDQ3NDE4NCwiZXhwIjoxNjM0NDc2NTg0fQ.5F1DNpQFSxGWgC-bIcZK5f_0sJyAOWvOrP-9rCJlP0U', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDQ3NDQ5OCwiZXhwIjoxNjM0NDc2ODk4fQ.XsNWi_FhH3g9mSfUgWgDaOitFCwybGwtbk1vS7fsOp4', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDQ4MjI3MiwiZXhwIjoxNjM0NDg0NjcyfQ.e0Pr4klF2qnl05Yy7-sSrCx3h9cCDS20ZMMINfMoCnU', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDQ4NDQ4MiwiZXhwIjoxNjM0NDg2ODgyfQ.9w1_cJQ22j5d5mncbESU2zT5OcPhFyAZdc8DIoy7SwA', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDQ4NjQzNCwiZXhwIjoxNjM0NDg4ODM0fQ.q3hE-9ypTOHGPPRR70DaSxEac8xfwAFIzeaR2-_vJ3w', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDQ4NzI2OCwiZXhwIjoxNjM0NDg5NjY4fQ.tOQbC25GDB0xFJZvPyBT6edVwxvr83rxhlQ0MyIJOpo', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDU2Mjk3MywiZXhwIjoxNjM0NTY1MzczfQ.exljpNp8LUqOw61Z_Uc58CJ4TdYyAhawS--iv6CfCRc', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDU2MzA4OSwiZXhwIjoxNjM0NTY1NDg5fQ.F_xMIlC7PDLEv7hnuFHztcyiKtitWCEkJFKX-Pe_lW8', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDU2NDgyNSwiZXhwIjoxNjM0NTY3MjI1fQ.jSa1kn6TqUvbAwhQVfULydJjUDkgvorSYZ8IIYN9c2k', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDU2NTAxMywiZXhwIjoxNjM0NTY3NDEzfQ.7rJPW4jiRTmn0XvmJtvWMuPMFojPAG8eq9qoZz4ITfU', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDU2NTk5MywiZXhwIjoxNjM0NTY4MzkzfQ.wisdbhlmKJo4uws3dlWybZ4DKFkSUQLTAv6IjMx6ZTA', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDU2NjE4MiwiZXhwIjoxNjM0NTY4NTgyfQ.FAnZfmXThLdSBfyQt2PjWagQ0A-2X1yE6Y2Yqws_deo', '192.168.43.214'),
(0, 99, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6OTksInVzZXJuYW1lIjoibWFoYXNpc3dhIiwiZW1haWwiOiJtYWhhc2lzd2FAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MCIsInJvbGUiOjMsInRhbmdnYWxfZGFmdGFyIjoiMjAyMC0wNC0wM1QxNzowMDowMC4wMDBaIiwiaXNWZXJpZmllZCI6MH1dLCJpYXQiOjE2MzQ2MDk0ODQsImV4cCI6MTYzNDYxMTg4NH0.M2ktcUBRqnTvHGIJs0GqHroRJpP3xxoA-ZeY7ID9ixs', '192.168.43.214'),
(0, 99, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6OTksInVzZXJuYW1lIjoibWFoYXNpc3dhIiwiZW1haWwiOiJtYWhhc2lzd2FAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MCIsInJvbGUiOjMsInRhbmdnYWxfZGFmdGFyIjoiMjAyMC0wNC0wM1QxNzowMDowMC4wMDBaIiwiaXNWZXJpZmllZCI6MH1dLCJpYXQiOjE2MzQ2MDk1MjMsImV4cCI6MTYzNDYxMTkyM30.97WgKPmC-LdS46jBgai8irDmG0Lfswqg_OgYj41NtPY', '192.168.43.214'),
(0, 99, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6OTksInVzZXJuYW1lIjoibWFoYXNpc3dhIiwiZW1haWwiOiJtYWhhc2lzd2FAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MCIsInJvbGUiOjMsInRhbmdnYWxfZGFmdGFyIjoiMjAyMC0wNC0wM1QxNzowMDowMC4wMDBaIiwiaXNWZXJpZmllZCI6MH1dLCJpYXQiOjE2MzQ2MDk2MzksImV4cCI6MTYzNDYxMjAzOX0.7yCSHjpfKoNT-t5GfHeMQP_sirtjb37Rfl5OT-3VOuk', '192.168.43.214'),
(0, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MSwidXNlcm5hbWUiOiJhbmRpa2EiLCJlbWFpbCI6ImFuZGlrYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDYwOTY4NywiZXhwIjoxNjM0NjEyMDg3fQ.6G3Qm0kIs1ralH0WAItYyb4pfHP_ZPCa9dlHP9OkY2k', '192.168.43.214'),
(0, 99, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6OTksInVzZXJuYW1lIjoibWFoYXNpc3dhIiwiZW1haWwiOiJtYWhhc2lzd2FAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MCIsInJvbGUiOjMsInRhbmdnYWxfZGFmdGFyIjoiMjAyMC0wNC0wM1QxNzowMDowMC4wMDBaIiwiaXNWZXJpZmllZCI6MH1dLCJpYXQiOjE2MzQ2MDk5ODksImV4cCI6MTYzNDYxMjM4OX0.UGw5z07umRWQwUaaa_XsW3O7g8NkyoaxjD9NXIHKGz4', '192.168.43.214'),
(0, 100, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MTAwLCJ1c2VybmFtZSI6ImRvc2VuIiwiZW1haWwiOiJkb3NlbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDYxMDA4OSwiZXhwIjoxNjM0NjEyNDg5fQ.VvcDBFcOLvIonXwGSZ720nqN0j00aTC750AvTN1PNDM', '192.168.43.214'),
(0, 99, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6OTksInVzZXJuYW1lIjoibWFoYXNpc3dhIiwiZW1haWwiOiJtYWhhc2lzd2FAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MCIsInJvbGUiOjMsInRhbmdnYWxfZGFmdGFyIjoiMjAyMC0wNC0wM1QxNzowMDowMC4wMDBaIiwiaXNWZXJpZmllZCI6MH1dLCJpYXQiOjE2MzQ2MTAxMTcsImV4cCI6MTYzNDYxMjUxN30.PF4psMxf167h4mcSZBQQnFkKkVLwJhQrv7s9e5Cl32A', '192.168.43.214'),
(0, 99, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6OTksInVzZXJuYW1lIjoibWFoYXNpc3dhIiwiZW1haWwiOiJtYWhhc2lzd2FAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MCIsInJvbGUiOjMsInRhbmdnYWxfZGFmdGFyIjoiMjAyMC0wNC0wM1QxNzowMDowMC4wMDBaIiwiaXNWZXJpZmllZCI6MH1dLCJpYXQiOjE2MzQ2MTA2MzUsImV4cCI6MTYzNDYxMzAzNX0.UAFSwKZPF5PKezKcYSmpbcJN4KJKQ_Al6pSTKlQ12Cw', '192.168.43.214'),
(0, 99, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6OTksInVzZXJuYW1lIjoibWFoYXNpc3dhIiwiZW1haWwiOiJtYWhhc2lzd2FAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MCIsInJvbGUiOjMsInRhbmdnYWxfZGFmdGFyIjoiMjAyMC0wNC0wM1QxNzowMDowMC4wMDBaIiwiaXNWZXJpZmllZCI6MH1dLCJpYXQiOjE2MzQ2MTA4ODAsImV4cCI6MTYzNDYxMzI4MH0.6dQfWD6m8Dg4iPZ-GYzB7yXhd350I5Ijs4aAFLOO3NM', '192.168.43.214'),
(0, 100, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6MTAwLCJ1c2VybmFtZSI6ImRvc2VuIiwiZW1haWwiOiJkb3NlbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIwLTA0LTAzVDE3OjAwOjAwLjAwMFoiLCJpc1ZlcmlmaWVkIjowfV0sImlhdCI6MTYzNDYxMDg5MCwiZXhwIjoxNjM0NjEzMjkwfQ.J8_dt1IWLNIhUDqcZRh7SeSwcNgg_3ZdR27zvpTCRvE', '192.168.43.214');

-- --------------------------------------------------------

--
-- Struktur dari tabel `form`
--

CREATE TABLE `form` (
  `id` int(11) NOT NULL,
  `judul` varchar(100) NOT NULL,
  `deskripsi` varchar(200) NOT NULL,
  `deadline` date NOT NULL,
  `id_matakuliah` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `form`
--

INSERT INTO `form` (`id`, `judul`, `deskripsi`, `deadline`, `id_matakuliah`) VALUES
(38, 'Tugas Review Jurnal', 'Review Jurnal Internasional berbasis IEEE dengan indeks scopus', '2021-10-31', 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `mata_kuliah`
--

CREATE TABLE `mata_kuliah` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `sks` int(1) NOT NULL,
  `kelas` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `mata_kuliah`
--

INSERT INTO `mata_kuliah` (`id`, `nama`, `sks`, `kelas`) VALUES
(1, 'Algoritma Struktur Data', 3, 'D'),
(2, 'Sistem Basis Data', 4, 'C'),
(3, 'Data Mining dan Warehouse', 4, 'A'),
(4, 'Analisis Perancangan Sistem Informasi', 6, 'A');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` int(11) NOT NULL,
  `tanggal_daftar` date NOT NULL,
  `isVerified` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `role`, `tanggal_daftar`, `isVerified`) VALUES
(1, 'andika', 'andika@gmail.com', '202cb962ac59075b964b07152d234b70', 2, '2020-04-04', 0),
(6, 'joko', 'joko@gmail.com', '202cb962ac59075b964b07152d234b70', 2, '2020-04-04', 0),
(7, 'ipung', 'ipung@gmail.com', '202cb962ac59075b964b07152d234b70', 2, '2020-04-04', 0),
(8, 'Member Dani', 'member@gmail.com', '202cb962ac59075b964b07152d234b70', 3, '2020-04-04', 0),
(41, 'ipungdev', 'banyustudio@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 2, '2020-08-05', 1),
(42, 'ipungdev', 'jakarta@gmail.com', '202cb962ac59075b964b07152d234b70', 2, '2020-08-06', 0),
(69, 'keenarstudio', 'ipungofficial@gmail.com', '018513325d2d96b864ce9a7993012b31', 3, '2020-08-06', 1),
(99, 'mahasiswa', 'mahasiswa@gmail.com', '202cb962ac59075b964b07152d234b70', 3, '2020-04-04', 0),
(100, 'dosen', 'dosen@gmail.com', '202cb962ac59075b964b07152d234b70', 2, '2020-04-04', 0);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_matakuliah` (`id_matakuliah`);

--
-- Indeks untuk tabel `mata_kuliah`
--
ALTER TABLE `mata_kuliah`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `form`
--
ALTER TABLE `form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT untuk tabel `mata_kuliah`
--
ALTER TABLE `mata_kuliah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `form`
--
ALTER TABLE `form`
  ADD CONSTRAINT `form_ibfk_1` FOREIGN KEY (`id_matakuliah`) REFERENCES `mata_kuliah` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
