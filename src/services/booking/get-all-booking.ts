"use server";

import { authOptions } from "@/app/lib/AuthOptions";
import { IBooking } from "@/types/common";
import { getServerSession } from "next-auth";

export const getAllBookings = async (): Promise<IBooking[]> => {
  const session = await getServerSession(authOptions);
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/bookings`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // @ts-ignore
      Authorization: `${session?.accessToken}`,
    },
    next: {
      tags: ["all-booking"],
    },
  });
  const { data } = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
