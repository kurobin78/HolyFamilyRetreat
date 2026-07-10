import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Bus, Utensils, Moon, Users, Sun, Speaker, BookOpen, Music, Heart, Mic, Camera, Tent, Star } from 'lucide-react';

const scheduleData = {
  day1: [
    { time: '13:30', title: '출발 준비 및 탑승', type: 'bus', desc: '세움교회 1층 로비 집결', icon: <Bus className="w-5 h-5" /> },
    { time: '14:00', title: '화성으로 이동', type: 'move', desc: '바울버스 & 1,2호차 전세버스', icon: <MapPin className="w-5 h-5" /> },
    { time: '15:30', title: '도착 및 짐풀기', type: 'normal', desc: '숙소 배정 및 오리엔테이션', icon: <Tent className="w-5 h-5" /> },
    { time: '16:00', title: '부서별 특별 프로그램', type: 'special', desc: '어린이부, 중고등부, 청년부, 장년부', icon: <Users className="w-5 h-5" /> },
    { time: '18:00', title: '저녁 식사', type: 'meal', desc: '연수원 식당 (지하 1층)', icon: <Utensils className="w-5 h-5" /> },
    { time: '19:30', title: '여는 예배', type: 'worship', desc: '말씀: 김현수 담임목사', icon: <Speaker className="w-5 h-5" /> },
    { time: '21:00', title: '세움가족 레크레이션', type: 'fun', desc: '웃음꽃 피는 교제 시간', icon: <Heart className="w-5 h-5" /> },
    { time: '22:30', title: '취침 및 휴식', type: 'rest', desc: '내일을 위한 충전', icon: <Moon className="w-5 h-5" /> }
  ],
  day2: [
    { time: '07:30', title: '기상 및 아침 식사', type: 'meal', desc: '연수원 식당 (지하 1층)', icon: <Sun className="w-5 h-5" /> },
    { time: '09:00', title: '숙소 체크아웃', type: 'normal', desc: '짐 정리 후 강당 집결', icon: <Tent className="w-5 h-5" /> },
    { time: '09:30', title: '아침 경건회', type: 'worship', desc: '찬양과 기도', icon: <Music className="w-5 h-5" /> },
    { time: '10:30', title: '부서별 오전 활동', type: 'special', desc: '각 부서별 장소에서 진행', icon: <Users className="w-5 h-5" /> },
    { time: '12:00', title: '점심 식사', type: 'meal', desc: '마지막 만찬', icon: <Utensils className="w-5 h-5" /> },
    { time: '13:00', title: '닫는 예배 및 시상식', type: 'worship', desc: '수련회 마무리', icon: <Star className="w-5 h-5" /> },
    { time: '14:30', title: '단체 사진 촬영', type: 'fun', desc: '아쉬움을 뒤로하고', icon: <Camera className="w-5 h-5" /> },
    { time: '15:00', title: '교회로 출발', type: 'move', desc: '안전하게 귀가', icon: <Bus className="w-5 h-5" /> }
  ]
};

export default function App() {
  const [activeTab, setActiveTab] = useState('day1');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getEventStyle = (type) => {
    switch(type) {
      case 'bus': case 'move': 
        return 'bg-pink-100/50 border-pink-200 text-pink-700 shadow-sm';
      case 'meal': 
        return 'bg-orange-50 border-orange-100 text-orange-600';
      case 'worship': 
        return 'bg-rose-50 border-rose-200 text-rose-700 shadow-sm';
      case 'special':
        return 'bg-purple-50 border-purple-100 text-purple-600';
      case 'fun':
        return 'bg-coral-50 border-coral-100 text-rose-500';
      case 'rest':
        return 'bg-slate-50 border-slate-200 text-slate-500';
      default: 
        return 'bg-white border-slate-100 text-slate-700';
    }
  };

  const getIconBg = (type) => {
    switch(type) {
      case 'bus': case 'move': return 'bg-pink-100 text-pink-600';
      case 'meal': return 'bg-orange-100 text-orange-500';
      case 'worship': return 'bg-rose-100 text-rose-600';
      case 'special': return 'bg-purple-100 text-purple-500';
      case 'fun': return 'bg-coral-100 text-rose-500';
      case 'rest': return 'bg-slate-200 text-slate-600';
      default: return 'bg-slate-100 text-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] font-sans selection:bg-rose-200">
      
      {/* 1. HERO HEADER */}
      <header className="relative w-full overflow-hidden bg-rose-50/50 pb-12 pt-16 h-[380px] lg:h-[350px]">
        {/* 배경 그라데이션 (노을빛 피치 & 코랄) */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-200/50 via-rose-100/50 to-[#FFF5F7]"></div>
        
        {/* 장식용 도트 배경 */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

        {/* 상단 좌측: 교회 로고 & 사진 올리기 버튼 */}
        <div className="absolute top-6 left-6 z-20 flex flex-col items-center gap-3">
          {/* 세움교회 로고 (CI) */}
          <img 
            src="image_81806a.png" 
            alt="세움교회" 
            className="h-10 w-auto opacity-90 drop-shadow-sm mix-blend-multiply transition-transform duration-300 hover:scale-105" 
          />
          
          {/* 사진 올리기 버튼 */}
          <a 
            href="https://seumkmc.quickconnect.to/mo/request/4wUHTbjrt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-white/70 hover:bg-white/90 text-rose-700 text-xs font-semibold rounded-full shadow-sm hover:shadow transition-all duration-300 backdrop-blur-sm border border-white/50"
            title="수련회 사진 올리기"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image-up">
              <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"/>
              <path d="m14 19.5 3-3 3 3"/>
              <path d="M17 22v-5.5"/>
              <circle cx="9" cy="9" r="2"/>
            </svg>
            사진 올리기
          </a>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center mt-4">
          
          {/* 로고 영역 (텍스트 대신 이미지 사용) */}
          <div className="mb-4 relative group">
            {/* 후광 효과 */}
            <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full scale-110 group-hover:bg-white/60 transition-all duration-500"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative z-10">
              {/* 수련회 로고 이미지 */}
              <img 
                src="image_8171fd.png" 
                alt="거룩한 가" 
                className="h-32 md:h-40 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
          
          <p className="text-[15px] sm:text-base text-rose-800/80 font-medium tracking-wide mb-6">
            2026. 07. 17(금) - 07. 18(토)
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm text-rose-800">
              <Clock className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-semibold">1박 2일</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm text-rose-800">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-semibold">화성 YBM연수원</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. QUICK INFO WIDGETS (배경 아래로 내림) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Widget 1: 필독 공지 */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-50 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(244,114,182,0.1)] transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-bl-full opacity-50 -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl">
                <Speaker className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">필독 공지사항</h3>
            </div>
            <ul className="space-y-3 relative z-10">
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                <strong>숙소 키:</strong> 첫날 16:00 분배
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                <strong>미배정자:</strong> 남 315호 / 여 215호
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                <strong>체크아웃:</strong> 둘째 날 09:00
              </li>
            </ul>
          </div>

          {/* Widget 2: 차량 탑승 */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-50 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(244,114,182,0.1)] transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full opacity-50 -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl">
                <Bus className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">차량 탑승</h3>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50/50 transition-colors">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-bold text-sm">1</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">1호차 (전세버스)</p>
                  <p className="text-xs text-slate-500">어린이부 및 학부모</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50/50 transition-colors">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-bold text-sm">2</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">2호차 (전세버스)</p>
                  <p className="text-xs text-slate-500">중고등부 및 학부모</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-rose-50/50 transition-colors">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold text-sm">바</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">바울버스</p>
                  <p className="text-xs text-slate-500">장년층</p>
                </div>
              </div>
            </div>
          </div>

          {/* Widget 3: 부서별 특별 프로그램 */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-50 relative overflow-hidden md:col-span-1 sm:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-pink-50 text-pink-600 rounded-xl">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">부서별 특별 프로그램</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {/* 장년부 */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 p-3.5 text-white shadow-sm hover:shadow-md transition-all cursor-default group">
                <div className="absolute right-[-10px] bottom-[-10px] opacity-20 transform group-hover:scale-110 transition-transform">
                  <BookOpen className="w-16 h-16" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-2 py-0.5 bg-white/20 rounded text-[10px] font-bold mb-1.5 backdrop-blur-sm">청장년/장년부</span>
                  <p className="font-bold text-sm leading-tight">크라운 재정 강의 &<br/>나눔</p>
                </div>
              </div>

              {/* 청년부 */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-400 to-indigo-400 p-3.5 text-white shadow-sm hover:shadow-md transition-all cursor-default group">
                <div className="absolute right-[-10px] bottom-[-10px] opacity-20 transform group-hover:scale-110 transition-transform">
                  <BookOpen className="w-16 h-16" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-2 py-0.5 bg-white/20 rounded text-[10px] font-bold mb-1.5 backdrop-blur-sm">청년부</span>
                  <p className="font-bold text-sm leading-tight">신앙과 미래 생산적 토크</p>
                </div>
              </div>

              {/* 중고등부 */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 p-3.5 text-white shadow-sm hover:shadow-md transition-all cursor-default group">
                <div className="absolute right-[-10px] bottom-[-10px] opacity-20 transform group-hover:scale-110 transition-transform">
                  <BookOpen className="w-16 h-16" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-2 py-0.5 bg-white/20 rounded text-[10px] font-bold mb-1.5 backdrop-blur-sm">중고등부</span>
                  <p className="font-bold text-sm leading-tight">출애굽기 리얼 스토리</p>
                </div>
              </div>

              {/* 어린이부 */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 p-3.5 text-white shadow-sm hover:shadow-md transition-all cursor-default group">
                <div className="absolute right-[-10px] bottom-[-10px] opacity-20 transform group-hover:scale-110 transition-transform">
                  <BookOpen className="w-16 h-16" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-2 py-0.5 bg-white/20 rounded text-[10px] font-bold mb-1.5 backdrop-blur-sm">어린이부</span>
                  <p className="font-bold text-sm leading-tight">놀라운 성막 이야기</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. MAIN TIMELINE */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        
        {/* 시간표 상단 헤더: 탭만 남김 (가운데 정렬) */}
        <div className="flex justify-center sm:justify-start mb-8">
          
          {/* iOS Style Segmented Control Tabs */}
          <div className="flex w-full sm:w-[400px] p-1.5 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-50 relative">
            <button
              onClick={() => setActiveTab('day1')}
              className={`flex-1 py-3.5 text-center font-bold text-[15px] rounded-xl transition-all duration-300 z-10 flex items-center justify-center gap-2 ${
                activeTab === 'day1' ? 'text-rose-700 bg-rose-50 shadow-sm' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              첫째 날 <span className="text-xs font-semibold opacity-60">7/17 (금)</span>
            </button>
            <button
              onClick={() => setActiveTab('day2')}
              className={`flex-1 py-3.5 text-center font-bold text-[15px] rounded-xl transition-all duration-300 z-10 flex items-center justify-center gap-2 ${
                activeTab === 'day2' ? 'text-rose-700 bg-rose-50 shadow-sm' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              둘째 날 <span className="text-xs font-semibold opacity-60">7/18 (토)</span>
            </button>
          </div>

        </div>

        {/* Timeline List */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(244,114,182,0.05)] border border-pink-50">
          <div className="relative">
            {/* 세로 타임라인 선 */}
            <div className="absolute left-[27px] sm:left-[39px] top-6 bottom-6 w-[2px] bg-pink-100 rounded-full"></div>
            
            <div className="space-y-8 sm:space-y-10">
              {scheduleData[activeTab].map((item, index) => (
                <div key={index} className="relative flex items-start group">
                  
                  {/* 시간 뱃지 (아이콘) */}
                  <div className={`relative z-10 flex items-center justify-center w-[56px] h-[56px] sm:w-[80px] sm:h-[80px] rounded-2xl shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm border-4 border-white ${getIconBg(item.type)}`}>
                    {item.icon}
                  </div>
                  
                  {/* 내용 */}
                  <div className="ml-5 sm:ml-8 flex-1 pt-1.5 sm:pt-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                      <span className="text-rose-600 font-black text-lg sm:text-xl tracking-tight">{item.time}</span>
                      <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></div>
                      <h4 className="text-slate-800 font-bold text-base sm:text-lg">{item.title}</h4>
                    </div>
                    
                    {/* 설명 태그 박스 */}
                    {item.desc && (
                      <div className={`inline-block px-3.5 py-1.5 rounded-lg text-[13px] font-semibold mt-2 border ${getEventStyle(item.type)} transition-colors duration-300`}>
                        {item.desc}
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white/80 border-t border-pink-100 py-10 mt-auto">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <img src="image_81806a.png" alt="세움교회" className="h-8 mx-auto mb-4 opacity-40 grayscale mix-blend-multiply" />
          <p className="text-slate-400 text-sm font-medium">
            © 2026 거룩한 뜻 세움교회. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
