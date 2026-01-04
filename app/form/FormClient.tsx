'use client';
import { saveMessage } from '../actions';
import { useActionState, useRef, useEffect } from 'react';

export default function FormClient() {
  const [state, action, isPending] = useActionState(saveMessage, null);

  const messageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state?.success) {
      if (messageRef.current) messageRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (phoneRef.current) phoneRef.current.value = '';
    }
  }, [state]);

  return (
    <form action={action} className='flex flex-col gap-4 items-start'>
      {/* Сообщение */}
      <input className='border px-2 py-1 rounded-md' name="message" placeholder="Напиши сообщение" ref={messageRef} disabled={isPending} />
      {state?.fieldErrors?.message && <p style={{ color: 'red' }}>{state.fieldErrors.message[0]}</p>}

      {/* Email */}
      <input className='border px-2 py-1 rounded-md' name="email" type="email" placeholder="Email" ref={emailRef} disabled={isPending} />
      {state?.fieldErrors?.email && <p style={{ color: 'red' }}>{state.fieldErrors.email[0]}</p>}

      {/* Телефон */}
      <input className='border px-2 py-1 rounded-md' name="phone" placeholder="Телефон" ref={phoneRef} disabled={isPending} />
      {state?.fieldErrors?.phone && <p style={{ color: 'red' }}>{state.fieldErrors.phone[0]}</p>}

      {/* Чекбокс */}
      <label>
        <input type="checkbox" name="subscribe" disabled={isPending} /> Подписаться на новости
      </label>
      {state?.fieldErrors?.subscribe && <p style={{ color: 'red' }}>{state.fieldErrors.subscribe[0]}</p>}

      {/* Радиокнопки */}
      <div className='flex gap-5'>
        <label>
          <input type="radio" name="gender" value="male" disabled={isPending} /> Мужской
        </label>
        <label>
          <input type="radio" name="gender" value="female" disabled={isPending} /> Женский
        </label>
        {state?.fieldErrors?.gender && <p style={{ color: 'red' }}>{state.fieldErrors.gender[0]}</p>}
      </div>

      <button type="submit" disabled={isPending} className='border py-1 px-4 rounded-2xl cursor-pointer'>
        {isPending ? 'Отправка...' : 'Отправить'}
      </button>

      {state?.success && <p style={{ color: 'green' }}>Отправлено ✅</p>}
      {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
    </form>
  );
}
