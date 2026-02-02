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

export async function updateUtility(id, formData) {
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
      UPDATE utilities SET
        title = ${title},
        map = ${map},
        side = ${side},
        site = ${site},
        type = ${type},
        mouse_click = ${mouse_click},
        stance = ${stance},
        movement = ${movement},
        video_url = ${video_url},
        description = ${description}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error("Failed to update utility:", error);
    return { error: "Failed to update utility" };
  }

  revalidatePath("/");
  revalidatePath("/admin/manage");
  redirect("/admin/manage");
}

export async function deleteUtility(id) {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  try {
    await sql`DELETE FROM utilities WHERE id = ${id}`;
  } catch (error) {
    console.error("Failed to delete utility:", error);
    return { error: "Failed to delete utility" };
  }

  revalidatePath("/");
  revalidatePath("/admin/manage");
}

// Community Submissions Actions
export async function submitCommunityUtility(formData) {
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
      INSERT INTO communityutils (
        title, map, side, site, type, mouse_click, stance, movement, video_url, description
      ) VALUES (
        ${title}, ${map}, ${side}, ${site}, ${type}, ${mouse_click}, ${stance}, ${movement}, ${video_url}, ${description}
      )
    `;
  } catch (error) {
    console.error("Failed to submit community utility:", error);
    return { error: "Failed to submit utility" };
  }

  redirect("/");
}

export async function approveCommunityUtility(id) {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  try {
    // Get the community utility
    const { rows } = await sql`SELECT * FROM communityutils WHERE id = ${id}`;
    const utility = rows[0];

    if (!utility) {
      return { error: "Utility not found" };
    }

    // Insert into main utilities table
    await sql`
      INSERT INTO utilities (
        title, map, side, site, type, mouse_click, stance, movement, video_url, description
      ) VALUES (
        ${utility.title}, ${utility.map}, ${utility.side}, ${utility.site}, 
        ${utility.type}, ${utility.mouse_click}, ${utility.stance}, ${utility.movement}, 
        ${utility.video_url}, ${utility.description}
      )
    `;

    // Delete from community table
    await sql`DELETE FROM communityutils WHERE id = ${id}`;
  } catch (error) {
    console.error("Failed to approve utility:", error);
    return { error: "Failed to approve utility" };
  }

  revalidatePath("/");
  revalidatePath("/admin/review");
}

export async function deleteCommunityUtility(id) {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  try {
    await sql`DELETE FROM communityutils WHERE id = ${id}`;
  } catch (error) {
    console.error("Failed to delete community utility:", error);
    return { error: "Failed to delete utility" };
  }

  revalidatePath("/admin/review");
}

export async function updateCommunityUtility(id, formData) {
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
      UPDATE communityutils SET
        title = ${title},
        map = ${map},
        side = ${side},
        site = ${site},
        type = ${type},
        mouse_click = ${mouse_click},
        stance = ${stance},
        movement = ${movement},
        video_url = ${video_url},
        description = ${description}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error("Failed to update community utility:", error);
    return { error: "Failed to update utility" };
  }

  revalidatePath("/admin/review");
  redirect("/admin/review");
}
