'use server';

import { cookies } from 'next/headers';

export async function clearCookies() {
  await cookies().set('cart', JSON.stringify([]));
}
