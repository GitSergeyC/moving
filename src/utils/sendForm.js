// src/utils/sendForm.js

export async function sendFormData(formData) {
  try {
    const response = await fetch("https://movingserver.vercel.app/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      return { success: true };
    } else {
      console.error("Ошибка ответа сервера:", data);
      return { success: false, error: data.error || "Неизвестная ошибка" };
    }
  } catch (error) {
    console.error("Ошибка при отправке формы:", error);
    return { success: false, error: "Ошибка при соединении с сервером" };
  }
}
