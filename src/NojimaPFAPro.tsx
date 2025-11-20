import React from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import TranslatedText from './components/TranslatedText';

/**
 * Project N‑Bot – Professional single‑page proposal site for Nojima.
 *
 * This component encapsulates the narrative of the PFA in a modern, responsive
 * layout. It uses Tailwind CSS classes defined in tailwind.config.js to
 * apply a colour palette reminiscent of Nojima's branding and a robotics
 * aesthetic: dark backgrounds, vibrant blues and warm amber highlights.
 */
export default function NojimaPFAPro() {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-textPrimary">
      {/* Top navigation bar */}
      <header className="w-full bg-surface/75 backdrop-blur-sm py-4 px-6 sticky top-0 z-50 border-b border-surface">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
            Project N‑Bot
          </h1>
          <div className="flex items-center gap-4">
            <TranslatedText className="text-sm md:text-base uppercase tracking-wider text-secondary">
              商业可行性评估
            </TranslatedText>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-screen-xl mx-auto py-12 px-6 md:px-8 space-y-20">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              <TranslatedText as="span">面向未来的陪伴型机器人供应链布局</TranslatedText>
            </h2>
            <p className="text-lg md:text-xl text-textSecondary">
              <TranslatedText>在硬件–软件解耦的新范式下，我们将中国整个机器人生态做供应链资产配置，为 Nojima 提供唯一可审计、可切换、可扩展的硬件与基础系统解决方案。</TranslatedText>
            </p>
          </div>
          {/* Key Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-surface rounded-2xl p-6 text-center shadow-sm border border-surface/60">
              <p className="text-4xl font-bold text-accent mb-2">84.7%</p>
              <p className="uppercase tracking-wide text-textSecondary text-sm">
                <TranslatedText>全球商用机器人出货来自中国</TranslatedText>
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-6 text-center shadow-sm border border-surface/60">
              <p className="text-4xl font-bold text-accent mb-2">1051.9万</p>
              <p className="uppercase tracking-wide text-textSecondary text-sm">
                <TranslatedText>2024年中国服务机器人产量</TranslatedText>
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-6 text-center shadow-sm border border-surface/60">
              <p className="text-4xl font-bold text-accent mb-2">3条路径</p>
              <p className="uppercase tracking-wide text-textSecondary text-sm">
                <TranslatedText>白牌+模组、品牌 OEM、双路并行</TranslatedText>
              </p>
            </div>
          </div>
        </section>

        {/* Executive Summary Section */}
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            <TranslatedText>执行摘要</TranslatedText>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Strategic window */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-xl font-medium text-secondary">
                <TranslatedText>战略窗口</TranslatedText>
              </h4>
              <p className="text-sm leading-relaxed text-textSecondary">
                <TranslatedText>全球机器人迈入"具身智能 + 家庭陪伴"新阶段，中国占据近半份额。硬件成熟但软件绑定，自主权与合规成为核心壁垒。</TranslatedText>
              </p>
            </div>
            {/* Reality in China */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-xl font-medium text-secondary">
                <TranslatedText>中国现实</TranslatedText>
              </h4>
              <ul className="text-sm space-y-2 text-textSecondary list-disc list-inside">
                <li><TranslatedText>硬件成熟，软件生态碎片化</TranslatedText></li>
                <li><TranslatedText>供应链分工显著，无单一完美工厂</TranslatedText></li>
                <li><TranslatedText>合规证书常见失效或型号不符</TranslatedText></li>
              </ul>
            </div>
            {/* Our role */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-xl font-medium text-secondary">
                <TranslatedText>我们的角色</TranslatedText>
              </h4>
              <p className="text-sm leading-relaxed text-textSecondary">
                <TranslatedText>作为在地首席战略官和资源整合者，我们不只是采购。我们设计并运营一套供应链管理体系，保障硬件端干净、可控、可审计。</TranslatedText>
              </p>
            </div>
          </div>
        </section>

        {/* Supply Landscape Section */}
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            <TranslatedText>供应商与生态地图</TranslatedText>
          </h3>
          <p className="text-textSecondary mb-6 text-sm md:text-base">
            <TranslatedText>基于在地调研，我们选取三类典型企业为标杆，展示他们的实力与我们如何利用或对标：</TranslatedText>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Alpha Egg */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-lg font-medium text-secondary">
                <TranslatedText>阿尔法蛋 & 淘云科技</TranslatedText>
              </h4>
              <p className="text-sm text-textSecondary">
                <TranslatedText>深耕儿童陪伴赛道，拥有自研儿童语音识别与童语理解模型。可作为儿童版硬件与交互体验标杆，未来探索纯硬件 OEM 合作。</TranslatedText>
              </p>
            </div>
            {/* UBTECH */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-lg font-medium text-secondary">
                <TranslatedText>优必选（UBTECH）</TranslatedText>
              </h4>
              <p className="text-sm text-textSecondary">
                <TranslatedText>从人形机器人延伸到桌面 AI 终端，与运营商合作推出家庭陪伴机器人。可作为高端桌面型参考，洽谈深度解耦 OEM 模式。</TranslatedText>
              </p>
            </div>
            {/* OrionStar */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-lg font-medium text-secondary">
                <TranslatedText>猎户星空（OrionStar）</TranslatedText>
              </h4>
              <p className="text-sm text-textSecondary">
                <TranslatedText>代表养老与公共服务场景的语音交互标杆，其跌倒监测与健康关怀方案为老年版提供经验，可用于技术对标而非直接引进。</TranslatedText>
              </p>
            </div>
          </div>
        </section>

        {/* Classification & Paths Section */}
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            <TranslatedText>供应链分类与合作路径</TranslatedText>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Classification List */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-secondary">
                <TranslatedText>五类供应商</TranslatedText>
              </h4>
              <ul className="text-sm text-textSecondary space-y-2 list-disc list-inside">
                <li><TranslatedText>全栈 C 端品牌型（交互好但强绑定）</TranslatedText></li>
                <li><TranslatedText>垂直场景服务型（导航与调度标杆）</TranslatedText></li>
                <li><TranslatedText>核心模组型（关节驱动与传感器）</TranslatedText></li>
                <li><TranslatedText>感知组件型（雷达、视觉等）</TranslatedText></li>
                <li><TranslatedText>ODM / EMS 代工型（整机组装与制造）</TranslatedText></li>
              </ul>
            </div>
            {/* Paths */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-secondary">
                <TranslatedText>三条合作路径</TranslatedText>
              </h4>
              <ul className="text-sm text-textSecondary space-y-2 list-disc list-inside">
                <li><strong className="text-accent"><TranslatedText>路径 A：</TranslatedText></strong> <TranslatedText>白牌 ODM + 模组化平台，用关节模组和 ODM 工厂快速搭建干净可审计的 MVP。</TranslatedText></li>
                <li><strong className="text-accent"><TranslatedText>路径 B：</TranslatedText></strong> <TranslatedText>品牌整机 OEM，保留运动控制层，完全替换高层 OS 与云服务。</TranslatedText></li>
                <li><strong className="text-accent"><TranslatedText>路径 C：</TranslatedText></strong> <TranslatedText>双路径并行 + 热备份供应池，兼顾体验上限和交付安全。</TranslatedText></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Governance & Quality Section */}
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            <TranslatedText>合规与质量控制蓝图</TranslatedText>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Legal / Foundation */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-lg font-medium text-secondary">
                <TranslatedText>法律与合规框架</TranslatedText>
              </h4>
              <ul className="text-sm text-textSecondary space-y-2 list-disc list-inside">
                <li><TranslatedText>CIP 贸易条款 – 我方负责运输保险</TranslatedText></li>
                <li><TranslatedText>Nojima 担任日本进口商 (IOR)</TranslatedText></li>
                <li><TranslatedText>硬件必须取得 Giteki & PSE 认证</TranslatedText></li>
                <li><TranslatedText>第三方机构交叉核验证书有效性</TranslatedText></li>
                <li><TranslatedText>供应商签署 IP 无侵权保证，禁止后门与数据回传</TranslatedText></li>
              </ul>
            </div>
            {/* Quality / Integration */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-lg font-medium text-secondary">
                <TranslatedText>质量与集成蓝图</TranslatedText>
              </h4>
              <ul className="text-sm text-textSecondary space-y-2 list-disc list-inside">
                <li><TranslatedText>制定 Master Spec Sheet – 明确接口与验收标准</TranslatedText></li>
                <li><TranslatedText>Clean Base OS – 拒绝任何预装云 SDK</TranslatedText></li>
                <li><TranslatedText>独立 QC 团队 – 在地之眼进行 PSI 检验</TranslatedText></li>
                <li><TranslatedText>联合评审 – 明确责任归属与测试流程</TranslatedText></li>
                <li><TranslatedText>质量数据可视化 – 批次追溯与改进闭环</TranslatedText></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Risk Matrix Section */}
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            <TranslatedText>风险与缓解策略</TranslatedText>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
            {/* Risk: Compliance forgery */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-3">
              <h4 className="text-lg font-medium text-accent">
                <TranslatedText>合规造假</TranslatedText>
              </h4>
              <p className="text-sm text-textSecondary">
                <TranslatedText>问题：证书过期或型号不符。</TranslatedText>
              </p>
              <p className="text-xs text-secondary"><TranslatedText>对策：第三方机构 + 行业人脉双核查，关键型号抽样送检。</TranslatedText></p>
            </div>
            {/* Risk: Single-source dependency */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-3">
              <h4 className="text-lg font-medium text-accent">
                <TranslatedText>单一供应商依赖</TranslatedText>
              </h4>
              <p className="text-sm text-textSecondary">
                <TranslatedText>问题：全部产能压在一家工厂。</TranslatedText>
              </p>
              <p className="text-xs text-secondary"><TranslatedText>对策：主供应商 + 热备份供应池，合同预留快速切换条款。</TranslatedText></p>
            </div>
            {/* Risk: Software backdoors */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-3">
              <h4 className="text-lg font-medium text-accent">
                <TranslatedText>软件黑盒与回传</TranslatedText>
              </h4>
              <p className="text-sm text-textSecondary">
                <TranslatedText>问题：残留云服务或远程控制通道。</TranslatedText>
              </p>
              <p className="text-xs text-secondary"><TranslatedText>对策：只交付裸硬件 + 控制层，SBOM 审计杜绝隐藏通路。</TranslatedText></p>
            </div>
            {/* Risk: Quality variation */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-3">
              <h4 className="text-lg font-medium text-accent">
                <TranslatedText>质量波动</TranslatedText>
              </h4>
              <p className="text-sm text-textSecondary">
                <TranslatedText>问题：首批与后续批次品质不一致。</TranslatedText>
              </p>
              <p className="text-xs text-secondary"><TranslatedText>对策：独立 QC 抽检，关键零件与工序可追溯。</TranslatedText></p>
            </div>
            {/* Risk: Cost / FX volatility */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-3">
              <h4 className="text-lg font-medium text-accent">
                <TranslatedText>成本与汇率波动</TranslatedText>
              </h4>
              <p className="text-sm text-textSecondary">
                <TranslatedText>问题：原材料或汇率变化影响成本。</TranslatedText>
              </p>
              <p className="text-xs text-secondary"><TranslatedText>对策：多厂竞价与长单锁价相结合，制定合理调价机制。</TranslatedText></p>
            </div>
          </div>
        </section>

        {/* Roles and Timeline Section */}
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            <TranslatedText>分工与里程碑</TranslatedText>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Roles */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-lg font-medium text-secondary">
                <TranslatedText>角色定位</TranslatedText>
              </h4>
              <p className="text-sm text-textSecondary">
                <strong><TranslatedText>Nojima：</TranslatedText></strong> <TranslatedText>定义产品体验与价值主张，提供 Base OS 和云服务，并作为日本进口商负责最终合规；</TranslatedText>
              </p>
              <p className="text-sm text-textSecondary">
                <strong><TranslatedText>我们：</TranslatedText></strong> <TranslatedText>在中国管理硬件、模组、代工与合规，构建供应链体系，确保硬件端干净可控。</TranslatedText>
              </p>
            </div>
            {/* Timeline */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-lg font-medium text-secondary">
                <TranslatedText>路线与里程碑</TranslatedText>
              </h4>
              <ol className="relative border-l border-surface/60 ml-4 space-y-4 text-sm text-textSecondary">
                <li className="pl-4">
                  <div className="absolute -left-1.5 top-0.5 w-3 h-3 rounded-full bg-accent"></div>
                  <p className="font-medium text-textPrimary"><TranslatedText>阶段 0：原则确认</TranslatedText></p>
                  <p><TranslatedText>2 周内确认贸易条款、IOR 与合规责任；双方建立沟通机制。</TranslatedText></p>
                </li>
                <li className="pl-4">
                  <div className="absolute -left-1.5 top-0.5 w-3 h-3 rounded-full bg-accent"></div>
                  <p className="font-medium text-textPrimary"><TranslatedText>阶段 1：蓝图与短名单</TranslatedText></p>
                  <p><TranslatedText>6 周梳理 Master Spec Sheet V0.5、形成供应商短名单并开展首轮技术交流。</TranslatedText></p>
                </li>
                <li className="pl-4">
                  <div className="absolute -left-1.5 top-0.5 w-3 h-3 rounded-full bg-accent"></div>
                  <p className="font-medium text-textPrimary"><TranslatedText>阶段 2：样机开发与合规锁定</TranslatedText></p>
                  <p><TranslatedText>12 周完成样机试制 50–100 台，启动 Giteki/PSE 测试计划。</TranslatedText></p>
                </li>
                <li className="pl-4">
                  <div className="absolute -left-1.5 top-0.5 w-3 h-3 rounded-full bg-accent"></div>
                  <p className="font-medium text-textPrimary"><TranslatedText>阶段 3：量产与优化</TranslatedText></p>
                  <p><TranslatedText>之后迭代成标准化平台，拓展儿童版/家庭版/老年版，并持续优化供应池。</TranslatedText></p>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface/75 border-t border-surface py-4 px-6">
        <div className="max-w-screen-xl mx-auto text-center text-xs text-textSecondary">
          © {new Date().getFullYear()} Project N‑Bot Proposal. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
