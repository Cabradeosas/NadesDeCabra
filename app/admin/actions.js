'use server';

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", {
      password: formData.get("password"),
      redirectTo: "/admin",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return "Contraseña incorrecta";
    }
    throw error;
  }
}

export async function createUtility(formData) {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const title = formData.get("title");
  const map = formData.get("map");
  const side = formData.get("side");
  const site = formData.get("site");
  const type = formData.get("type");
  const mouse_click = formData.get("mouse_click");
  const stance = formData.get("stance");
  const movement = formData.get("movement");
  const video_url = formData.get("video_url");
  const description = formData.get("description");

  try {
    await sql`
      INSERT INTO utilities (
        title, map, side, site, type, mouse_click, stance, movement, video_url, description
      ) VALUES (
        ${title}, ${map}, ${side}, ${site}, ${type}, ${mouse_click}, ${stance}, ${movement}, ${video_url}, ${description}
      )
    `;
  } catch (error) {
    console.error("Failed to create utility:", error);
    return { error: "Failed to create utility" };
  }

  revalidatePath("/");
  redirect("/");
}
