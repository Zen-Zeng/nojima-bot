import React from 'react';

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
            Project N‑Bot
          </h1>
          <span className="text-sm md:text-base uppercase tracking-wider text-secondary">
            商业可行性评估
          </span>
        </div>
      </header>

      <main className="flex-1 w-full max-w-screen-xl mx-auto py-12 px-6 md:px-8 space-y-20">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              面向未来的陪伴型机器人供应链布局
            </h2>
            <p className="text-lg md:text-xl text-textSecondary">
              在硬件–软件解耦的新范式下，我们将中国整个机器人生态做供应链资产配置，为 Nojima
              提供唯一可审计、可切换、可扩展的硬件与基础系统解决方案。
            </p>
          </div>
          {/* Key Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-surface rounded-2xl p-6 text-center shadow-sm border border-surface/60">
              <p className="text-4xl font-bold text-accent mb-2">84.7%</p>
              <p className="uppercase tracking-wide text-textSecondary text-sm">
                全球商用机器人出货来自中国
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-6 text-center shadow-sm border border-surface/60">
              <p className="text-4xl font-bold text-accent mb-2">1051.9万</p>
              <p className="uppercase tracking-wide text-textSecondary text-sm">
                2024年中国服务机器人产量
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-6 text-center shadow-sm border border-surface/60">
              <p className="text-4xl font-bold text-accent mb-2">3条路径</p>
              <p className="uppercase tracking-wide text-textSecondary text-sm">
                白牌+模组、品牌 OEM、双路并行
              </p>
            </div>
          </div>
        </section>

        {/* Executive Summary Section */}
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">执行摘要</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Strategic window */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-xl font-medium text-secondary">战略窗口</h4>
              <p className="text-sm leading-relaxed text-textSecondary">
                全球机器人迈入“具身智能 + 家庭陪伴”新阶段，中国占据近半份额。硬件成熟但软件绑定，自主权与合规成为核心壁垒。
              </p>
            </div>
            {/* Reality in China */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-xl font-medium text-secondary">中国现实</h4>
              <ul className="text-sm space-y-2 text-textSecondary list-disc list-inside">
                <li>硬件成熟，软件生态碎片化</li>
                <li>供应链分工显著，无单一完美工厂</li>
                <li>合规证书常见失效或型号不符</li>
              </ul>
            </div>
            {/* Our role */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-xl font-medium text-secondary">我们的角色</h4>
              <p className="text-sm leading-relaxed text-textSecondary">
                作为在地首席战略官和资源整合者，我们不只是采购。我们设计并运营一套供应链管理体系，保障硬件端干净、可控、可审计。
              </p>
            </div>
          </div>
        </section>

        {/* Supply Landscape Section */}
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">供应商与生态地图</h3>
          <p className="text-textSecondary mb-6 text-sm md:text-base">
            基于在地调研，我们选取三类典型企业为标杆，展示他们的实力与我们如何利用或对标：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Alpha Egg */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-lg font-medium text-secondary">阿尔法蛋 & 淘云科技</h4>
              <p className="text-sm text-textSecondary">
                深耕儿童陪伴赛道，拥有自研儿童语音识别与童语理解模型。可作为儿童版硬件与交互体验标杆，未来探索纯硬件 OEM 合作。
              </p>
            </div>
            {/* UBTECH */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-lg font-medium text-secondary">优必选（UBTECH）</h4>
              <p className="text-sm text-textSecondary">
                从人形机器人延伸到桌面 AI 终端，与运营商合作推出家庭陪伴机器人。可作为高端桌面型参考，洽谈深度解耦 OEM 模式。
              </p>
            </div>
            {/* OrionStar */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-lg font-medium text-secondary">猎户星空（OrionStar）</h4>
              <p className="text-sm text-textSecondary">
                代表养老与公共服务场景的语音交互标杆，其跌倒监测与健康关怀方案为老年版提供经验，可用于技术对标而非直接引进。
              </p>
            </div>
          </div>
        </section>

        {/* Classification & Paths Section */}
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">供应链分类与合作路径</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Classification List */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-secondary">五类供应商</h4>
              <ul className="text-sm text-textSecondary space-y-2 list-disc list-inside">
                <li>全栈 C 端品牌型（交互好但强绑定）</li>
                <li>垂直场景服务型（导航与调度标杆）</li>
                <li>核心模组型（关节驱动与传感器）</li>
                <li>感知组件型（雷达、视觉等）</li>
                <li>ODM / EMS 代工型（整机组装与制造）</li>
              </ul>
            </div>
            {/* Paths */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-secondary">三条合作路径</h4>
              <ul className="text-sm text-textSecondary space-y-2 list-disc list-inside">
                <li><strong className="text-accent">路径 A：</strong> 白牌 ODM + 模组化平台，用关节模组和 ODM 工厂快速搭建干净可审计的 MVP。</li>
                <li><strong className="text-accent">路径 B：</strong> 品牌整机 OEM，保留运动控制层，完全替换高层 OS 与云服务。</li>
                <li><strong className="text-accent">路径 C：</strong> 双路径并行 + 热备份供应池，兼顾体验上限和交付安全。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Governance & Quality Section */}
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">合规与质量控制蓝图</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Legal / Foundation */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-lg font-medium text-secondary">法律与合规框架</h4>
              <ul className="text-sm text-textSecondary space-y-2 list-disc list-inside">
                <li>CIP 贸易条款 – 我方负责运输保险</li>
                <li>Nojima 担任日本进口商 (IOR)</li>
                <li>硬件必须取得 Giteki & PSE 认证</li>
                <li>第三方机构交叉核验证书有效性</li>
                <li>供应商签署 IP 无侵权保证，禁止后门与数据回传</li>
              </ul>
            </div>
            {/* Quality / Integration */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-lg font-medium text-secondary">质量与集成蓝图</h4>
              <ul className="text-sm text-textSecondary space-y-2 list-disc list-inside">
                <li>制定 Master Spec Sheet – 明确接口与验收标准</li>
                <li>Clean Base OS – 拒绝任何预装云 SDK</li>
                <li>独立 QC 团队 – 在地之眼进行 PSI 检验</li>
                <li>联合评审 – 明确责任归属与测试流程</li>
                <li>质量数据可视化 – 批次追溯与改进闭环</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Risk Matrix Section */}
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">风险与缓解策略</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
            {/* Risk: Compliance forgery */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-3">
              <h4 className="text-lg font-medium text-accent">合规造假</h4>
              <p className="text-sm text-textSecondary">
                问题：证书过期或型号不符。
              </p>
              <p className="text-xs text-secondary">对策：第三方机构 + 行业人脉双核查，关键型号抽样送检。</p>
            </div>
            {/* Risk: Single-source dependency */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-3">
              <h4 className="text-lg font-medium text-accent">单一供应商依赖</h4>
              <p className="text-sm text-textSecondary">
                问题：全部产能压在一家工厂。
              </p>
              <p className="text-xs text-secondary">对策：主供应商 + 热备份供应池，合同预留快速切换条款。</p>
            </div>
            {/* Risk: Software backdoors */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-3">
              <h4 className="text-lg font-medium text-accent">软件黑盒与回传</h4>
              <p className="text-sm text-textSecondary">
                问题：残留云服务或远程控制通道。
              </p>
              <p className="text-xs text-secondary">对策：只交付裸硬件 + 控制层，SBOM 审计杜绝隐藏通路。</p>
            </div>
            {/* Risk: Quality variation */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-3">
              <h4 className="text-lg font-medium text-accent">质量波动</h4>
              <p className="text-sm text-textSecondary">
                问题：首批与后续批次品质不一致。
              </p>
              <p class="text-xs text-secondary">对策：独立 QC 抽检，关键零件与工序可追溯。</p>
            </div>
            {/* Risk: Cost / FX volatility */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-3">
              <h4 className="text-lg font-medium text-accent">成本与汇率波动</h4>
              <p className="text-sm text-textSecondary">
                问题：原材料或汇率变化影响成本。
              </p>
              <p className="text-xs text-secondary">对策：多厂竞价与长单锁价相结合，制定合理调价机制。</p>
            </div>
          </div>
        </section>

        {/* Roles and Timeline Section */}
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">分工与里程碑</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Roles */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-lg font-medium text-secondary">角色定位</h4>
              <p className="text-sm text-textSecondary">
                <strong>Nojima：</strong> 定义产品体验与价值主张，提供 Base OS 和云服务，并作为日本进口商负责最终合规；
              </p>
              <p className="text-sm text-textSecondary">
                <strong>我们：</strong> 在中国管理硬件、模组、代工与合规，构建供应链体系，确保硬件端干净可控。
              </p>
            </div>
            {/* Timeline */}
            <div className="bg-surface rounded-xl p-6 border border-surface/60 shadow-sm space-y-4">
              <h4 className="text-lg font-medium text-secondary">路线与里程碑</h4>
              <ol className="relative border-l border-surface/60 ml-4 space-y-4 text-sm text-textSecondary">
                <li className="pl-4">
                  <div className="absolute -left-1.5 top-0.5 w-3 h-3 rounded-full bg-accent"></div>
                  <p className="font-medium text-textPrimary">阶段 0：原则确认</p>
                  <p>2 周内确认贸易条款、IOR 与合规责任；双方建立沟通机制。</p>
                </li>
                <li className="pl-4">
                  <div className="absolute -left-1.5 top-0.5 w-3 h-3 rounded-full bg-accent"></div>
                  <p className="font-medium text-textPrimary">阶段 1：蓝图与短名单</p>
                  <p>6 周梳理 Master Spec Sheet V0.5、形成供应商短名单并开展首轮技术交流。</p>
                </li>
                <li className="pl-4">
                  <div className="absolute -left-1.5 top-0.5 w-3 h-3 rounded-full bg-accent"></div>
                  <p className="font-medium text-textPrimary">阶段 2：样机开发与合规锁定</p>
                  <p>12 周完成样机试制 50–100 台，启动 Giteki/PSE 测试计划。</p>
                </li>
                <li className="pl-4">
                  <div className="absolute -left-1.5 top-0.5 w-3 h-3 rounded-full bg-accent"></div>
                  <p className="font-medium text-textPrimary">阶段 3：量产与优化</p>
                  <p>之后迭代成标准化平台，拓展儿童版/家庭版/老年版，并持续优化供应池。</p>
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
