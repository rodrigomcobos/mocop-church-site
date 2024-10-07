import React, { useState } from 'react'
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';


const faqItems = [
    {
        question: "O que é dízimo?",
        answer: "O dízimo é uma prática de generosidade que remonta às Escrituras Sagradas e é considerada uma forma importante de adoração. Em essência, o dízimo consiste em destinar 10% da sua renda a Deus, como reconhecimento de que tudo o que temos e somos vem Dele. Essa contribuição não é apenas um ato financeiro; é um reflexo da nossa fé e confiança em Deus como nosso provedor."
    },
    {
        question: "Por que é importante dar ofertas?",
        answer: "Na Bíblia, encontramos diversas passagens que falam sobre a importância do dízimo, como em Levítico 27:30, que diz: “Todo dízimo da terra, seja dos grãos da terra, seja do fruto das árvores, é do Senhor; é coisa consagrada ao Senhor.” Essa consagração nos lembra que nossos recursos materiais são uma dádiva de Deus, e dar o dízimo é uma forma de honrá-Lo. Além disso, o dízimo nos ensina a priorizar Deus em nossas finanças e a confiar que Ele cuidará de nossas necessidades. É uma prática que promove o crescimento espiritual e nos ajuda a desenvolver uma mentalidade de generosidade. Ao dar o dízimo, não apenas apoiamos a obra da igreja, mas também nos tornamos parte de algo maior, contribuindo para a edificação do corpo de Cristo e para a expansão do Seu reino. Assim, o dízimo é uma maneira de demonstrar nossa obediência, gratidão e compromisso com Deus, além de ser uma oportunidade de experimentar as bênçãos que Ele promete àqueles que se dispõem a dar com alegria."
    },
    {
        question: "Como os dízimos e ofertas são utilizados pela igreja?",
        answer: "Os dízimos e ofertas recebidos pela nossa igreja são fundamentais para manter as operações diárias e apoiar os diversos ministérios que servem à nossa comunidade. Uma parte significativa é destinada ao pagamento de despesas essenciais, como contas de luz, água e aluguel, garantindo que a igreja funcione de maneira adequada. Além disso, esses recursos financiam programas de assistência social, eventos especiais e ações missionárias, promovendo o crescimento espiritual e a edificação da fé entre os membros da igreja. Ademais, as ofertas também são utilizadas para apoiar missionários e ministérios externos, permitindo que a obra de Deus se expanda além das paredes da nossa congregação. Cada contribuição é cuidadosamente administrada para que possamos realizar nossa missão, impactar vidas e compartilhar o amor de Cristo. Agradecemos a cada membro que contribui generosamente, pois sua participação é vital para o crescimento e sucesso da nossa obra. Juntos, fazemos uma diferença significativa no mundo ao nosso redor."
    },
    {
        question: "Como posso começar a dizimar e ofertar?",
        answer: "Começar a dizimar e ofertar é um passo significativo na vida cristã e envolve um compromisso pessoal com Deus. A primeira coisa a se considerar é a intenção do seu coração. Dízimos, que correspondem a 10% da sua renda, são uma forma de reconhecer a soberania de Deus sobre sua vida financeira, enquanto as ofertas representam sua generosidade e gratidão por tudo o que Ele tem feito. Para começar, você pode estabelecer um valor que se sinta confortável em contribuir, respeitando a sua situação financeira. Muitas pessoas optam por destinar seus dízimos e ofertas mensalmente, com base em sua renda. É aconselhável separar essa quantia logo que receber o pagamento, para que se torne uma prioridade em seu orçamento. Além disso, a oração é um aspecto fundamental; busque a orientação de Deus sobre quanto e como contribuir. Se estiver em dúvida, converse com um líder da igreja ou participe de grupos de discipulado que abordem a importância da generosidade. Lembre-se de que cada contribuição, por menor que seja, é valiosa e faz parte de uma missão maior de servir e ajudar aos necessitados."
    },
    {
        question: "Qual é a diferença entre dízimos e ofertas?",
        answer: "Dízimos e ofertas são duas práticas importantes na vida financeira de um cristão, mas cada uma possui um propósito e significado distintos. O dízimo refere-se à prática de dar 10% da sua renda como uma forma de honrar a Deus e reconhecer Sua soberania sobre todas as áreas de sua vida, incluindo as finanças. Essa prática é fundamentada em passagens bíblicas, como Malaquias 3:10, onde Deus nos convida a trazer os dízimos à casa do tesouro. O dízimo é considerado um mandamento, e seu objetivo é sustentar a obra da igreja, apoiar os ministros e ajudar em atividades missionárias. Por outro lado, as ofertas são contribuições voluntárias que vão além do dízimo. Elas podem ser dadas em qualquer quantia e a qualquer momento, com o propósito de expressar gratidão, apoiar projetos específicos, ou ajudar aqueles que estão em necessidade. As ofertas refletem o coração generoso do doador e podem ser direcionadas a causas específicas, como missões, assistência a comunidades carentes, ou eventos da igreja. Enquanto o dízimo é uma porcentagem fixa, as ofertas são flexíveis e podem variar de acordo com a capacidade e a vontade de cada pessoa. Ambas as práticas são fundamentais para a vida cristã e contribuem para a construção do Reino de Deus na Terra."
    },
    {
        question: "Como posso obter mais informações?",
        answer: "Nossa equipe financeira está feliz em se reunir com os membros para discutir nosso orçamento e responder perguntas relacionadas a finanças. Envie um e-mail para lewisvillemocop@gmail.com e deixe-nos sentar com você para responder as suas perguntas."
    }
];



const GivingFaq = () => {
    const [openIndex, setOpenIndex] = useState(1);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <section className="space-y-4 max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-3xl font-extrabold text-yellowBtnHover mb-8"
                    variants={itemVariants}
                >
                    Perguntas frequentes
                </motion.h2>
                {faqItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`rounded-lg ${openIndex === index ? 'bg-primary ring-2 ring-yellowBtnHover' : 'hover:bg-primary hover:ring-2 ring-yellowBtnHover'} transition-all`}
                        variants={itemVariants}
                    >
                        <button
                            type="button"
                            className="w-full text-base font-semibold text-left py-5 px-6 text-black flex items-center"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="mr-4 text-lg">{item.question}</span>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-auto shrink-0"
                            >
                                <FaChevronDown />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="pb-5 px-6"
                                >
                                    <p className="text-sm text-black">{item.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </section>
        </motion.div>
    )
}

export default GivingFaq