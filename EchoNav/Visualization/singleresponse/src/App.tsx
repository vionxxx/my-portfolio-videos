import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Target } from 'lucide-react';

// 单个文本条组件
interface TextBarProps {
  isTitle: boolean;
  delay: number;
  shouldFill: boolean;
  isTarget?: boolean;
}

function TextBar({ isTitle, delay, shouldFill, isTarget = false }: TextBarProps) {
  const height = isTitle ? 'h-[12px]' : 'h-[10px]';
  const width = isTitle ? 'w-full' : 'w-full';
  
  // 如果是目标行，只填充到50%（目标在中间）
  const finalScale = isTarget && shouldFill ? 0.5 : (shouldFill ? 1 : 0);
  
  return (
    <div className={`relative ${height} ${width} bg-[#d9d9d9] rounded-sm overflow-visible flex items-center justify-center`}>
      <motion.div
        className={`absolute inset-0 bg-[#8a88ff] rounded-sm overflow-hidden`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: finalScale }}
        transition={{
          duration: 0.533,
          delay: delay,
          ease: "easeInOut"
        }}
        style={{ transformOrigin: 'left' }}
      />
      
      {/* 目标标记 - 显示在行中间 */}
      {isTarget && (
        <>
          {/* 目标图标 - 初始大小和文段高度一样 */}
          <motion.div
            className="relative z-10 flex items-center justify-center"
            initial={{ opacity: 1, scale: 1, rotate: 0 }}
            animate={{ 
              opacity: 1,
              scale: shouldFill ? [1, 2.5, 2] : 1,
              rotate: shouldFill ? [0, 360, 360] : 0
            }}
            transition={{
              scale: { delay: delay + 0.8, duration: 0.8, times: [0, 0.5, 1], ease: "easeOut" },
              rotate: { delay: delay + 0.8, duration: 0.6, times: [0, 0.5, 1], ease: "easeOut" }
            }}
          >
            <Target 
              className="w-[10px] h-[10px] text-[#8a88ff]" 
              strokeWidth={2.5}
              fill="currentColor"
            />
          </motion.div>
          
          {/* 找到目标时的动画效果 */}
          {shouldFill && (
            <>
              {/* 庆祝星星效果 - 四个方向 */}
              {[0, 90, 180, 270].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute z-[12] w-2 h-2 bg-[#8a88ff] rounded-full"
                  initial={{ 
                    opacity: 0,
                    x: 0,
                    y: 0,
                    scale: 0
                  }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    x: [0, Math.cos(angle * Math.PI / 180) * 35],
                    y: [0, Math.sin(angle * Math.PI / 180) * 35],
                    scale: [0, 1, 0.5]
                  }}
                  transition={{
                    delay: delay + 0.9 + i * 0.05,
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                />
              ))}
              
              {/* 第一层脉冲光环 - 更大更明显 */}
              <motion.div
                className="absolute z-[9] rounded-full border-[3px] border-[#8a88ff]"
                initial={{ width: 15, height: 15, opacity: 0 }}
                animate={{ 
                  width: [15, 70, 80],
                  height: [15, 70, 80],
                  opacity: [0, 1, 0] 
                }}
                transition={{
                  delay: delay + 0.8,
                  duration: 1.2,
                  times: [0, 0.4, 1],
                  ease: "easeOut"
                }}
              />
              
              {/* 第二层脉冲光环 */}
              <motion.div
                className="absolute z-[9] rounded-full border-[3px] border-[#8a88ff]"
                initial={{ width: 15, height: 15, opacity: 0 }}
                animate={{ 
                  width: [15, 60, 70],
                  height: [15, 60, 70],
                  opacity: [0, 0.8, 0] 
                }}
                transition={{
                  delay: delay + 1.0,
                  duration: 1.0,
                  times: [0, 0.4, 1],
                  ease: "easeOut"
                }}
              />
              
              {/* 第三层脉冲光环 */}
              <motion.div
                className="absolute z-[9] rounded-full border-[2px] border-[#8a88ff]"
                initial={{ width: 15, height: 15, opacity: 0 }}
                animate={{ 
                  width: [15, 50, 60],
                  height: [15, 50, 60],
                  opacity: [0, 0.6, 0] 
                }}
                transition={{
                  delay: delay + 1.2,
                  duration: 0.9,
                  times: [0, 0.4, 1],
                  ease: "easeOut"
                }}
              />
              
              {/* 强烈的发光效果 */}
              <motion.div
                className="absolute z-[8] w-[50px] h-[50px] rounded-full bg-[#8a88ff]/40 blur-xl"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ 
                  opacity: [0, 1, 0.7, 0],
                  scale: [0.3, 1.5, 1.3, 1]
                }}
                transition={{
                  delay: delay + 0.8,
                  duration: 1.8,
                  times: [0, 0.2, 0.6, 1],
                  ease: "easeOut"
                }}
              />
              
              {/* 内层闪光 */}
              <motion.div
                className="absolute z-[11] w-[20px] h-[20px] rounded-full bg-[#ffffff]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 1.5]
                }}
                transition={{
                  delay: delay + 0.8,
                  duration: 0.4,
                  ease: "easeOut"
                }}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

// 单个段落组件（标题 + 3行内容）
interface SectionProps {
  titleDelay: number;
  contentDelay: number[];
  fillTitle: boolean;
  fillContent: boolean;
  hasTarget?: boolean;
  targetIndex?: number;
}

function Section({ titleDelay, contentDelay, fillTitle, fillContent, hasTarget = false, targetIndex = -1 }: SectionProps) {
  return (
    <div className="mb-[20px] last:mb-0">
      {/* 标题 */}
      <div className="w-[240px]">
        <TextBar isTitle={true} delay={titleDelay} shouldFill={fillTitle} />
      </div>
      
      {/* 内容行 */}
      <div className="ml-[40px] mt-[10px] space-y-[8px]">
        <div className="w-[260px]">
          <TextBar 
            isTitle={false} 
            delay={contentDelay[0]} 
            shouldFill={fillContent}
            isTarget={hasTarget && targetIndex === 0}
          />
        </div>
        <div className="w-[260px]">
          <TextBar 
            isTitle={false} 
            delay={contentDelay[1]} 
            shouldFill={fillContent}
            isTarget={hasTarget && targetIndex === 1}
          />
        </div>
        <div className="w-[260px]">
          <TextBar 
            isTitle={false} 
            delay={contentDelay[2]} 
            shouldFill={fillContent}
            isTarget={hasTarget && targetIndex === 2}
          />
        </div>
      </div>
    </div>
  );
}

// 左侧面板：跳段阅读（先读所有标题，然后读最后一段内容直到找到目标）
function SkipReadingPanel() {
  return (
    <div className="relative rounded-[20px] border-2 border-[#d9d9d9] px-[20px] py-[30px] flex-1 h-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Section 
          titleDelay={0.333}
          contentDelay={[999, 999, 999]}
          fillTitle={true}
          fillContent={false}
        />
        <Section 
          titleDelay={0.933}
          contentDelay={[999, 999, 999]}
          fillTitle={true}
          fillContent={false}
        />
        <Section 
          titleDelay={1.533}
          contentDelay={[2.133, 2.733, 999]}
          fillTitle={true}
          fillContent={true}
          hasTarget={true}
          targetIndex={1}
        />
      </div>
    </div>
  );
}

// 右侧面板：顺序阅读（逐行阅读直到找到目标）
function SequentialReadingPanel() {
  return (
    <div className="relative rounded-[20px] border-2 border-[#d9d9d9] px-[20px] py-[30px] flex-1 h-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Section 
          titleDelay={0.333}
          contentDelay={[0.933, 1.533, 2.133]}
          fillTitle={true}
          fillContent={true}
        />
        <Section 
          titleDelay={2.733}
          contentDelay={[3.333, 3.933, 4.533]}
          fillTitle={true}
          fillContent={true}
        />
        <Section 
          titleDelay={5.133}
          contentDelay={[5.733, 6.333, 999]}
          fillTitle={true}
          fillContent={true}
          hasTarget={true}
          targetIndex={1}
        />
      </div>
      
      {/* 模糊蒙版 - 代表盲人/视障人士无法进行视觉扫描 */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] rounded-[18px] pointer-events-none z-[100]" />
    </div>
  );
}

export default function App() {
  const [key, setKey] = useState(0);

  // 自动重复动画
  useEffect(() => {
    const timer = setInterval(() => {
      setKey(prev => prev + 1);
    }, 8000); // 每8秒重复一次

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      {/* 固定800*400的frame */}
      <div className="w-[800px] h-[400px] flex items-center justify-center">
        <div key={key} className="flex gap-[30px] w-full h-full">
          {/* 左侧：跳段阅读 */}
          <SkipReadingPanel />

          {/* 右侧：顺序阅读 */}
          <SequentialReadingPanel />
        </div>
      </div>
    </div>
  );
}