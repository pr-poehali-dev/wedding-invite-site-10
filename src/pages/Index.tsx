import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => setIsPlaying(false);
      audio.addEventListener('ended', handleEnded);
      return () => audio.removeEventListener('ended', handleEnded);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="https://www.soundjay.com/misc/sounds/magic-chime-02.wav" type="audio/wav" />
      </audio>

      {/* Music Control */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={toggleMusic}
          variant="outline"
          size="sm"
          className="bg-white/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
        >
          <Icon name={isPlaying ? "Volume2" : "VolumeX"} size={16} />
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(/img/43fd4a0e-ea96-4ae4-a830-56ace5d7c7ff.jpg)` }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
              <img 
                src="/img/43fd4a0e-ea96-4ae4-a830-56ace5d7c7ff.jpg" 
                alt="Молодожёны"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-heading font-light text-primary mb-4">
              Гамлет & Карина
            </h1>
            <p className="text-xl md:text-2xl font-body text-secondary mb-8">
              Приглашаем вас разделить с нами самый важный день нашей жизни
            </p>
            <div className="flex items-center justify-center gap-4 text-lg font-body text-secondary/80">
              <Icon name="Calendar" size={20} />
              <span>15 сентября 2024</span>
              <span>•</span>
              <Icon name="MapPin" size={20} />
              <span>Усадьба "Романово"</span>
            </div>
          </div>
        </div>
      </section>

      {/* Place Section */}
      <section className="py-20 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">Место проведения</h2>
            <p className="text-lg font-body text-secondary max-w-2xl mx-auto">
              Торжественная церемония и празднование пройдут в живописной усадьбе "Романово"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="overflow-hidden shadow-2xl border-primary/10">
                <CardContent className="p-0">
                  <img 
                    src="/img/44a62c29-75c5-42a5-a7a8-2c026a683428.jpg"
                    alt="Место проведения"
                    className="w-full h-80 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-heading text-xl text-primary mb-2">Адрес</h3>
                  <p className="font-body text-secondary">
                    Московская область, Истринский район<br />
                    Усадьба "Романово", ул. Парковая, 15
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-heading text-xl text-primary mb-2">Время</h3>
                  <p className="font-body text-secondary">
                    Сбор гостей: 15:00<br />
                    Церемония: 15:30
                  </p>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-white font-body">
                <Icon name="Navigation" size={16} className="mr-2" />
                Построить маршрут
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">Программа торжества</h2>
            <p className="text-lg font-body text-secondary">
              Расписание нашего особенного дня
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              { time: "15:00", title: "Сбор гостей", desc: "Встреча гостей, welcome-коктейли", icon: "Users" },
              { time: "15:30", title: "Церемония бракосочетания", desc: "Торжественная регистрация брака", icon: "Heart" },
              { time: "16:30", title: "Фотосессия", desc: "Групповые и семейные фотографии", icon: "Camera" },
              { time: "17:30", title: "Банкет", desc: "Праздничное застолье", icon: "Utensils" },
              { time: "19:00", title: "Первый танец", desc: "Открытие танцевальной программы", icon: "Music" },
              { time: "19:30", title: "Развлекательная программа", desc: "Игры, конкурсы, живая музыка", icon: "Sparkles" },
              { time: "23:00", title: "Торт и сладкий стол", desc: "Разрезание свадебного торта", icon: "Cake" }
            ].map((item, index) => (
              <Card key={index} className="border-primary/10 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={item.icon as any} size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-heading text-primary">{item.time}</span>
                        <h3 className="text-xl font-heading text-primary">{item.title}</h3>
                      </div>
                      <p className="font-body text-secondary">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-20 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-8">Дресс-код</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <Card className="border-primary/10 overflow-hidden">
              <CardContent className="p-8 text-center">
                <Icon name="User" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-heading text-primary mb-4">Для мужчин</h3>
                <ul className="font-body text-secondary space-y-2 text-left">
                  <li>• Костюм тёмных оттенков</li>
                  <li>• Светлая рубашка</li>
                  <li>• Галстук или бабочка</li>
                  <li>• Классические туфли</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-primary/10 overflow-hidden">
              <CardContent className="p-8 text-center">
                <Icon name="User" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-heading text-primary mb-4">Для женщин</h3>
                <ul className="font-body text-secondary space-y-2 text-left">
                  <li>• Коктейльное или вечернее платье</li>
                  <li>• Пастельные или яркие оттенки</li>
                  <li>• Избегайте белого цвета</li>
                  <li>• Удобная обувь для танцев</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-lg font-body text-secondary">
            Цветовая гамма торжества: <span className="text-primary font-medium">пудрово-розовый</span> и <span className="text-secondary font-medium">мокко</span>
          </p>
        </div>
      </section>

      {/* Drinks Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-8">Напитки</h2>
          
          <Card className="border-primary/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Icon name="Wine" size={48} className="text-primary mx-auto mb-6" />
              <p className="font-body text-secondary text-lg leading-relaxed mb-6">
                Мы позаботились об алкогольных напитках для всех гостей. 
                В меню будут представлены вина, шампанское, крепкие напитки и безалкогольные коктейли.
              </p>
              <p className="font-body text-secondary">
                Если у вас есть особые предпочтения или ограничения, 
                пожалуйста, сообщите нам заранее.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Wishes Section */}
      <section className="py-20 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-8">Пожелания</h2>
          
          <Card className="border-primary/10">
            <CardContent className="p-8">
              <Icon name="Heart" size={48} className="text-primary mx-auto mb-6" />
              <p className="font-body text-secondary text-lg leading-relaxed mb-6">
                Ваше присутствие на нашей свадьбе — это самый дорогой подарок для нас! 
                Мы искренне ценим, что вы разделите с нами этот особенный день.
              </p>
              <p className="font-body text-secondary mb-6">
                Если вы хотите сделать нам подарок, мы будем благодарны за:
              </p>
              <ul className="font-body text-secondary space-y-2 text-left max-w-md mx-auto">
                <li>• Денежные подарки для нашего совместного будущего</li>
                <li>• Подарочные сертификаты для путешествий</li>
                <li>• Предметы для дома из нашего списка желаний</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <img 
              src="/img/73bcd1e4-05f3-4b2e-a2dc-3b8d2c8111fc.jpg"
              alt="Празднование"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
            />
            <p className="font-heading text-2xl text-primary mb-4">
              С любовью, Гамлет и Карина
            </p>
            <p className="font-body text-secondary">
              Мы не можем дождаться, чтобы отпраздновать с вами!
            </p>
          </div>
          
          <div className="flex justify-center gap-6">
            <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
              <Icon name="Mail" size={16} className="mr-2" />
              wedding@email.com
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;