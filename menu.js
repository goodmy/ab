var g_nStyle = 0;	// ͼƬ����  0: ���  1: ��׿ 4.0 �������ü�ݣ���������ʽ  2: ��׿ 4.0 �������ü�ݣ�����ѯ��
var g_bDL = 'download' in document.createElement('a') && navigator.userAgent.indexOf('Lenovo') < 0;

function getDL(s) {return g_bDL ? (s ? "download='"+s+"'" : "download") : "";}

function loadMenu()
{
document.write('<table cellspacing=0 cellpadding=0 width=100% bgcolor=white style="position:fixed;top:0;z-index:1000;table-layout:fixed"><tr>\
<td class=menu><a href="index.html" class=w>�� ҳ</a></td><td width=1></td>\
<td class=menu><a href="download.html" class=w>�� ��</a></td><td width=1></td>\
<td class=menu><a href="javascript:goPic();" class=w>ͼ Ƭ</a></td><td width=1></td>\
<td class=menu><a href="player.html" class=w>�� Ƶ</a></td><td width=1></td>\
<td class=menu><a href="3tui.html" class=w>�� ��</a></td></tr></table><div style="height:2em"></div>');

	var s = navigator.userAgent, n = s.indexOf("MSIE");
	if (n > 0)
	{	
		var c = s.charAt(n+5);
		if (c > '5' && c <= '9') g_nStyle = 0;
		return;
	}
	n = s.indexOf("Android");
	if (n > 0)
	{
		s = s.substr(n+7, 5);
		if (s.indexOf("2.3") >= 0 || s.indexOf("4.0") >= 0) g_nStyle = 0;
	}
}
loadMenu();

function goPic()
{
	window.location.href = g_nStyle == 0 || (g_nStyle == 2  && !confirm("��ʽͼƬ�����밴ȷ��\n���ͼƬ�����밴ȡ��\n���ͼƬ������򷵻�")) ? "picture2.html" : "picture.html";
}