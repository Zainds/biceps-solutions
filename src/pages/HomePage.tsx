import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Clock, Users, Dumbbell } from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920')" 
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Преобразите своё тело, <br />
              <span className="text-primary">преобразите свою жизнь</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Присоединяйтесь к фитнес-центру Biceps Solutions и откройте для себя персонализированный подход к фитнесу, современное оборудование и поддерживающее сообщество.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                as={Link}
                to="/auth/register"
                rightIcon={<ArrowRight size={20} />}
              >
                Начать тренировки
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/classes"
                className="hover:bg-white/10 hover:text-white"
              >
                Наши занятия
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают Biceps Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы больше, чем просто спортзал. Мы - сообщество, помогающее вам достичь ваших фитнес-целей.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-background rounded-lg p-8 shadow-md text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dumbbell size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Современное оборудование</h3>
              <p className="text-muted-foreground">
                Новейшее фитнес-оборудование для максимально эффективных тренировок.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-background rounded-lg p-8 shadow-md text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Опытные тренеры</h3>
              <p className="text-muted-foreground">
                Сертифицированные фитнес-профессионалы, преданные вашему успеху.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-background rounded-lg p-8 shadow-md text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Удобный график</h3>
              <p className="text-muted-foreground">
                Расширенные часы работы для вашего удобства.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-background rounded-lg p-8 shadow-md text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Поддержка сообщества</h3>
              <p className="text-muted-foreground">
                Мотивирующая атмосфера, где участники вдохновляют друг друга.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные занятия</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя разнообразие фитнес-занятий для всех уровней подготовки.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-background rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/7530055/pexels-photo-7530055.jpeg" 
                alt="HIIT Class" 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Power HIIT</h3>
                <p className="text-muted-foreground mb-4">
                  Высокоинтенсивные интервальные тренировки для максимального сжигания калорий.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">Средний уровень</span>
                  <span className="text-sm text-muted-foreground">45 мин</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-background rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/4056478/pexels-photo-4056478.jpeg" 
                alt="Yoga Class" 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Йога</h3>
                <p className="text-muted-foreground mb-4">
                  Мягкие и эффективные занятия йогой для развития гибкости и баланса.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">Все уровни</span>
                  <span className="text-sm text-muted-foreground">60 мин</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-background rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/4164512/pexels-photo-4164512.jpeg" 
                alt="Strength Training" 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Силовые тренировки</h3>
                <p className="text-muted-foreground mb-4">
                  Изучите правильную технику и развивайте силу всего тела.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">Начальный уровень</span>
                  <span className="text-sm text-muted-foreground">50 мин</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="primary" 
              size="lg"
              as={Link}
              to="/classes"
              rightIcon={<ArrowRight size={20} />}
            >
              Все занятия
            </Button>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать свой путь к фитнесу?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к Biceps Solutions сегодня и трансформируйте свой фитнес-опыт с нашим современным оборудованием и экспертным руководством.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            as={Link}
            to="/pricing"
            className="hover:bg-white/10 hover:text-white"
          >
            Посмотреть абонементы
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Истории успеха от нашего сообщества, демонстрирующие реальные результаты.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-8 shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="Иван Д." 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">Иван Д.</h4>
                  <p className="text-sm text-muted-foreground">Клиент 1 год</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Тренеры в Biceps Solutions полностью изменили мой подход к фитнесу. Я сбросил 15 кг и обрел уверенность, о которой даже не мечтал."
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                  alt="Мария С." 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">Мария С.</h4>
                  <p className="text-sm text-muted-foreground">Клиент 2 года</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Атмосфера сообщества - это то, что заставляет меня возвращаться. Все очень поддерживающие, а занятия подходят для любого уровня подготовки."
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                  alt="Михаил Т." 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">Михаил Т.</h4>
                  <p className="text-sm text-muted-foreground">Клиент 6 месяцев</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "После посещения нескольких залов я наконец нашел свой дом в Biceps Solutions. Оборудование первоклассное, а круглосуточный доступ идеально подходит для моего напряженного графика."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;