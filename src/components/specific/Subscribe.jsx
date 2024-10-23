import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState({
        message: '',
        type: '' // 'success' or 'error'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email) {
            setStatus({
                message: 'Por favor, digite seu e-mail',
                type: 'error'
            });
            return;
        }

        setIsSubmitting(true);
        setStatus({ message: '', type: '' });

        try {
            const templateParams = {
                email: email,
                to_name: 'Admin',
                message: `New subscription request from: ${email}`
            };

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus({
                message: 'Inscrição realizada com sucesso!',
                type: 'success'
            });
            setEmail('');
        } catch (error) {
            setStatus({
                message: 'Erro ao processar sua inscrição. Tente novamente.',
                type: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto my-20 flex flex-col md:flex-row items-center justify-center gap-12 px-6">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-yellowBtnHover text-2xl md:text-3xl font-bold mb-6">
                        Inscreva-se e Fique por Dentro!
                    </h2>
                    <p className="text-gray-800 text-md">
                        Se você deseja acompanhar tudo o que acontece na nossa igreja e ser parte da nossa jornada de fé,
                        inscreva-se na nossa newsletter. Receba notícias sobre cultos, eventos especiais, estudos bíblicos
                        e muito mais diretamente no seu e-mail. Sua participação é muito importante para nós!
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <form onSubmit={handleSubscribe} className="w-full">
                        <div className="mt-4 md:mt-8 flex flex-col gap-4">
                            <div className="flex items-center bg-gray-100 rounded overflow-hidden">
                                <input
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 w-full text-gray-800 bg-transparent text-sm px-4 py-3 outline-none"
                                    placeholder="Digite seu e-mail"
                                    disabled={isSubmitting}
                                />
                                <motion.button
                                    type="submit"
                                    className={`btn ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Inscrever-se'}
                                </motion.button>
                            </div>

                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`text-center p-2 rounded ${status.type === 'success'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-red-100 text-red-700'
                                        }`}
                                >
                                    {status.message}
                                </motion.div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Subscribe;