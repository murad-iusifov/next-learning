'use server';
import { z } from 'zod';
import { prisma } from '@/libs/prisma';

type FormState = {
  success: boolean;
  error?: string | null;
  fieldErrors?: Record<string, string[]>;
} | null;

// схема Zod для всех полей
const messageSchema = z.object({
  message: z.string().min(3, 'Сообщение слишком короткое'),
  email: z.string().email('Некорректный email'),
  phone: z
    .string()
    .regex(/^\d+$/, 'Телефон должен содержать только цифры')
    .min(10, 'Телефон должен быть минимум 10 цифр'),
  subscribe: z.coerce.boolean(), // приведение checkbox к булевому
  gender: z.enum(['male', 'female'], 'Выберите пол'), // радиокнопки
});

export async function saveMessage(
  prevState: FormState,
  payload: FormData
): Promise<FormState> {
  const data = Object.fromEntries(payload);
  const parsed = messageSchema.safeParse(data);

  console.log('Данные с формы:', data);

  if (!parsed.success) {
    return {
      success: false,
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { message, email, phone, subscribe, gender } = parsed.data;

  await prisma.message.create({
    data: {
      message,
      email,
      phone,
      subscribe,
      gender
    }
  });

  return { success: true };
}
