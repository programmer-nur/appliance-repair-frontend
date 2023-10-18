"use server";

export const getAllSlots = async (): Promise<any> => {
  const res = await fetch(`http://localhost:4000/api/v1/slots`, {
    headers: {
      "Content-Type": "application/json",
    },
    // next: {
    //   revalidate: 24 * 60 * 60,
    //   tags: ["all-slots"],
    // },
  });
  const { data } = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};