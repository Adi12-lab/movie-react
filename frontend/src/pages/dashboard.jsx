import { Icon } from "@iconify/react";
import PasswordInput from "../components/passwordInput";
import BackButton from "../components/backButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import { axiosInstance } from "../api";
import axios from "axios";
import Swal from "sweetalert2";

const Dashboard = () => {
  const navigate = useNavigate();
  const first_name = useRef(null);
  const last_name = useRef(null);
  const phone = useRef(null);
  const gender = useRef(null);
  const address = useRef(null);
  const accessToken = localStorage && localStorage.getItem("accessToken");
  const refreshToken = localStorage && localStorage.getItem("refreshToken");
  const username = refreshToken && jwt_decode(refreshToken).username;

  const [uploadedImage, setUploadedImage] = useState(null);

  // Untuk mengganti password
  const oldPassword = useRef(null);
  const newPassword = useRef(null); // menyamakan dengan passwodConfirm
  const confirmPassword = useRef(null);

  //data dari database
  const [userData, setUserData] = useState([]);
  const getProfile = async (accessToken, username) => {
    const result = await axiosInstance.get("http://localhost:3001/getProfile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        username,
      },
    });
    return result;
  };

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    } else {
      getProfile(accessToken, username).then((result) => {
        setUserData(result.data[0]);
      });
    }
  }, [navigate, accessToken, username]);

  const handleLogout = async (e) => {
    try {
      await axiosInstance.post("http://localhost:3002/logout", { username });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeImage = (e) => {
    const previewImage = document.querySelector("#preview-image");
  
    const file = e.target.files[0];
    if(file) previewImage.src = URL.createObjectURL(file);

    setUploadedImage(e.target.files[0]);
  };
  const handleSubmitProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", uploadedImage);
    formData.append("username", username);
    Swal.fire({
      title: "Simpan perubahan data anda ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Simpan",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosInstance.post(
            "http://localhost:3001/insertProfile",
            {
              username,
              first_name: first_name.current.value,
              last_name: last_name.current.value,
              phone: phone.current.value,
              gender: gender.current.value,
              address: address.current.value,
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          axios
            .post("http://localhost:3001/upload", formData)
            .then((result) => {
              console.log(result.data);
            })
            .catch((err) => {
              console.log(err.data);
            });
        } catch (err) {
          Swal.fire("Update gagal", err, "error");
        }
        Swal.fire("Update berhasil", "Profile telah diperbarui", "success");
      }
    });
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Apakah anda yakin ?",
      text: "Tindakan anda tidak dapat diurungkan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Simpan",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (newPassword.current.value !== confirmPassword.current.value) {
          Swal.fire("Gagal", "password tidak sesuai", "error");
          return;
        }
        try {
          await axiosInstance.post(
            "http://localhost:3001/changePassword",
            {
              username,
              old_password: oldPassword.current.value,
              new_password: newPassword.current.value,
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          Swal.fire(
            "Berhasil",
            "Password anda telah diganti, silahkan login...",
            "success"
          );

          await axiosInstance.post("http://localhost:3002/logout", {
            username,
          });
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          navigate("/login");
        } catch (err) {
          Swal.fire("Gagal", err.response.data, "error");
        }
      }
    });
  };

  return (
    <main className="bg-dark">
      <div className="container py-20 text-white">
        <button
          className="mb-7 flex items-center rounded-lg bg-red-500 px-3 py-2 font-imprima text-xl outline outline-2 outline-red-500 hover:outline-offset-4"
          type="button"
          onClick={handleLogout}
        >
          <Icon icon="solar:logout-2-outline" />{" "}
          <span className="ms-3">Logout</span>
        </button>
        <BackButton />

        <h1 className="mb-4 text-end font-gurajada text-6xl">Dashboard</h1>
        <h2 className="border-l-4 border-secondary pl-7 font-homenaje text-3xl">
          Profil {userData.username}
        </h2>
        <form onSubmit={handleSubmitProfile}>
          <div className="mt-3 flex gap-x-6 lg:block">
            <div className="mx-auto mt-9 w-[500px] max-w-lg lg:w-full">
              <img
                id="preview-image"
                src={`http://localhost:3001/images/${
                  userData.image ?? `user.png`
                }`}
                alt={userData.username}
                className="w-full"
              />
              <label
                for="image-upload"
                className="flex cursor-pointer justify-center rounded-bl-md rounded-br-md transition duration-150 bg-blue-600 p-2 text-black hover:bg-blue-500 focus:bg-blue-500"
              >
                <Icon icon="bi:camera-fill" className="text-lg" />
              </label>
              <input
                accept="image/*"
                id="image-upload"
                className="hidden"
                type="file"
                placeholder="pilih foto profil"
                onChange={handleChangeImage}
              />
            </div>
            <div className="w-full">
              <div className="mt-6 grid grid-cols-2 gap-6 font-imprima">
                <div>
                  <label className="mb-3 block w-full">Nama depan</label>
                  <input
                    ref={first_name}
                    className="w-full rounded-md border-2 border-secondary bg-stone-800 px-4 py-2 focus:outline-none"
                    defaultValue={userData.first_name}
                  />
                </div>
                <div>
                  <label className="mb-3 block w-full">Nama belakang</label>
                  <input
                    ref={last_name}
                    className="w-full rounded-md border-2 border-secondary bg-stone-800 px-4 py-2 focus:outline-none"
                    defaultValue={userData.last_name}
                  />
                </div>
                <div>
                  <label className="mb-3 block w-full">Jenis kelamin</label>
                  <select
                    ref={gender}
                    className="w-full rounded-md border-2 border-secondary bg-stone-800 px-4 py-[10px] text-white focus:outline-none"
                  >
                    <option></option>
                    <option
                      value="L"
                      selected={userData.gender === "L" ? "selected" : ""}
                    >
                      Laki - laki
                    </option>
                    <option
                      value="P"
                      selected={userData.gender === "P" ? "selected" : ""}
                    >
                      Perempuan
                    </option>
                  </select>
                </div>
                <div>
                  <label className="mb-3 block w-full">No telepon</label>
                  <input
                    ref={phone}
                    className="w-full rounded-md border-2 border-secondary bg-stone-800 px-4 py-2 focus:outline-none"
                    type="number"
                    defaultValue={userData.phone}
                  />
                </div>
                <div className="col-span-2">
                  <label className="mb-3 block w-full">Alamat</label>
                  <textarea
                    ref={address}
                    className="h-40 w-full rounded-md border-2 border-secondary bg-stone-800 px-4 py-2 focus:outline-none"
                    defaultValue={userData.address}
                  ></textarea>
                </div>
              </div>
              <button className="mx-auto mt-3 flex w-[100px] items-center rounded-md bg-primary px-4 py-2 font-gurajada text-3xl text-black outline outline-2 outline-primary hover:outline-offset-4">
                <span>Save</span>
                <Icon icon="material-symbols:save-sharp" className="ms-2" />
              </button>
            </div>
          </div>
        </form>
        <h1 className="mt-10 border-l-4 border-red-600 pl-7 font-homenaje text-3xl">
          Ganti password
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmitPassword}>
          <div className="mt-9 grid gap-y-6 font-imprima">
            <div>
              <label className="mb-3 block w-full">Password lama</label>
              <PasswordInput
                className="w-full rounded-md border-2 border-secondary bg-stone-800 px-4 py-2 tracking-[1.2px] focus:outline-none"
                ref={oldPassword}
              />
            </div>
            <div>
              <label className="mb-3 block w-full">Password baru</label>
              <PasswordInput
                className="w-full rounded-md border-2 border-secondary bg-stone-800 px-4 py-2 tracking-[1.2px] focus:outline-none"
                ref={newPassword}
              />
            </div>
            <div>
              <label className="mb-3 block w-full">
                Konfirmasi password baru
              </label>
              <PasswordInput
                className="w-full rounded-md border-2 border-secondary bg-stone-800 px-4 py-2 tracking-[1.2px] focus:outline-none"
                ref={confirmPassword}
              />
            </div>
          </div>
          <button className="mx-auto mt-6 flex w-[100px] items-center rounded-md bg-yellow-600 px-4 py-2 font-gurajada text-3xl text-black outline outline-2 outline-yellow-600 hover:outline-offset-4">
            <span>Save</span>
            <Icon icon="material-symbols:save-sharp" className="ms-2" />
          </button>
        </form>
      </div>
    </main>
  );
};

export default Dashboard;
