import{a1 as o,O as t,N as i,a2 as p}from"./vendor-cc407d8e.js";import"./__commonjsHelpers__-725317a4.js";const c={class:"markdown-body"},r=p('<p>[[toc]]</p><p><img src="https://yun.swimly.cn/source/ikoolcore/banner.png" alt=""></p><h2>硬酷R1主要应用场景：</h2><h3>家庭防火墙（Firewall）</h3><p>随着国内互联网过去10年的高速发展，黑客攻击和广告追踪，越来越影响我们的日常冲浪体验。借助硬酷R1，用户可安装<code>pFsense</code>、<code>OPNsense</code>、<code>iKuai</code>、<code>OpenWRT</code>等主要防火墙和流控的开源路由系统，轻松实现家庭网络的安全掌控。更有极客玩家安装ROS系统、Panabit等系统。在硬酷R1和各种开源的路由系统的加持下，我们可以轻松实现家庭网络去广告、自建<code>DNS服务</code>等，使我们的私有内网更安全。</p><h3>虚拟机（Hypervisor）</h3><p>硬酷R1基于通用<code>x86</code>架构设计，你可以安装运行 XCP-ng、Citrix Hypervisor、ESXi、Proxmox 等虚拟机。</p><ul><li><p>4 个<code>i226-IT</code> <code>2.5G网口</code>可让您将专用网络资源分配给各个虚拟机或容器；</p></li><li><p>使用<code>赛扬N5105</code>/<code>奔腾N6005</code>，高达16GB内存可选，可以部署更多虚拟机；</p></li></ul><h3>远程办公（Remote Office）</h3><p>在疫情期间，远程办公逐渐兴起。借助DDNS+端口转发，可以实现人在异地，远程通过Microsoft Remote Desktop工具登陆办公电脑，实现远程操控，体验更流畅。</p><p class="notice">前提：有公网IP，且拥有一个可用于DDNS服务的域名</p><h3>Docker宿主机： (基于虚拟机之上玩各种套娃Docker服务)</h3><p>可以物理直装Linux系统，并安装docker服务，借助docker实现各种各样的微服务。也可以基于虚拟机之下的Linux系统上安装docker跑各种个性化需求的微服务。</p><ul><li><p>Portainer——Docker图形化管理工具</p></li><li><p>Alist —— 超好用的在线网盘挂载工具</p></li><li><p>LibreSpeed——内外网测速工具</p></li><li><p>OpenSpeedTest——高颜值内外网测速工具</p></li><li><p>Squoosh——GoogleChromeLab团队出品的开源图片压缩工具</p></li><li><p>PhotoPrism —— 优秀的相册管理工具</p></li><li><p>TrwebOCR——OCR在线识别工具</p></li></ul><blockquote><p>具体这些Docker的使用和配置信息，请前往默认<a href="https://wiki.ikoolcore.cn/#/guidance/default_os">系统配置页面</a>了解</p></blockquote><h3>下载机</h3><p>可以直装Windows当各种云网盘的下载机，也可以借助docker安装各种pt下载工具（transmission/qbittorrent等），轻松玩转pt。同时也可以基于PVE/ESXi/Unraid等虚拟机下安装开源NAS系统，通过直通USB硬盘设备作为存储盘。</p><p class="notice">可行，但不推荐。R1产品定位没有为NAS场景考虑</p><h3>家庭媒体服务器</h3><p>借助诸如jellyfin, Plex, alist等docker工具，轻松扮演家庭内网的媒体服务器。</p><p><img src="https://yun.swimly.cn/source/ikoolcore/Banner_tw.png" alt=""></p>',21),s=[r],k="产品定位",_=[{property:"og:title",content:"产品定位"}],S={__name:"position",setup(l,{expose:e}){return e({frontmatter:{title:"产品定位",meta:[{property:"og:title",content:"产品定位"}]}}),o({title:"产品定位",meta:[{property:"og:title",content:"产品定位"}]}),(d,h)=>(i(),t("div",c,s))}};export{S as default,_ as meta,k as title};
