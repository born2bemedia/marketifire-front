'use server';

import { cookies } from 'next/headers';

export async function logout() {
  try {
    const cookieInst = await cookies();

    cookieInst.delete('token');
    cookieInst.delete('user');

    return { success: true };
  } catch (e) {
    console.error(e);
    return { success: false };
  }
}
