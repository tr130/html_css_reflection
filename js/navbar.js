const themes = {
  'webd': '#926fb1',
  'it': '#4183d7',
  'tele': '#d64541',
  'besp': '#67809f',
  'digm': '#2ecc71',
  'cybs': '#f62459',
};
const themesDarker = {
  'webd': '#79539a',
  'it': '#286abd',
  'tele': '#bc2c28',
  'besp': '#526781',
  'digm': '#25a25a',
  'cybs': '#de093f'
}
const navItems = document.querySelectorAll('.nav_list_item');
const sub = document.querySelector('.nav_sub');
const submenu = {
  'webd': [
    ["stylish websites", "https://www.netmatters.co.uk/web-design/website-design"],
    ["ecommerce stores", "https://www.netmatters.co.uk/web-design/ecommerce-development"],
    ["branding", "https://www.netmatters.co.uk/web-design/branding"],
    ["apps", "https://www.netmatters.co.uk/web-design/mobile-apps-development"],
    ["web hosting", "https://www.netmatters.co.uk/web-design/web-hosting"],
    ["pay monthly websites", "https://www.netmatters.co.uk/web-design/pay-monthly-websites"]
  ],
  'it': [
    ["managed it", "https://www.netmatters.co.uk/it-support/managed-it-support"],
    ["business it", "https://www.netmatters.co.uk/it-support/managed-it-support"],
    ["office 365", "https://www.netmatters.co.uk/it-support/office-365-for-business"],
    ["consultancy", "https://www.netmatters.co.uk/it-support/it-consultancy"],
    ["cloud provider", "https://www.netmatters.co.uk/it-support/cloud-service-provider"],
    ["data backup", "https://www.netmatters.co.uk/it-support/data-backup-disaster-recovery"]
  ],
  'tele': [
    ["gigabit voucher", "https://www.netmatters.co.uk/telecoms-services/gigabit-voucher-scheme"],
    ["hosted voip", "https://www.netmatters.co.uk/telecoms-services/hosted-business-voip"],
    ["business voip", "https://www.netmatters.co.uk/telecoms-services/business-voip"],
    ["business broadband", "https://www.netmatters.co.uk/telecoms-services/business-broadband-provider"],
    ["leased line", "https://www.netmatters.co.uk/telecoms-services/leased-lines-provider"],
    ["3cx systems", "https://www.netmatters.co.uk/telecoms-services/3cx-system"]
  ],
  'besp': [
    ["workflow", "https://www.netmatters.co.uk/bespoke-software/workflow-solutions"],
    ["automation", "https://www.netmatters.co.uk/bespoke-software/business-automation"],
    ["integration", "https://www.netmatters.co.uk/bespoke-software/systems-integrations"],
    ["database", "https://www.netmatters.co.uk/bespoke-software/database-management-software"],
    ["sharepoint", "https://www.netmatters.co.uk/bespoke-software/sharepoint-development"],
    ["business management", "https://www.netmatters.co.uk/bespoke-software/business-management-software"]
  ],
  'digm': [
    ["search (seo)", "https://www.netmatters.co.uk/digital-marketing/seo-search-engine-optimisation"],
    ["paid (ppc)", "https://www.netmatters.co.uk/digital-marketing/ppc"],
    ["conversion (cro)", "https://www.netmatters.co.uk/digital-marketing/conversion-marketing"],
    ["email", "https://www.netmatters.co.uk/digital-marketing/email-marketing"],
    ["social media", "https://www.netmatters.co.uk/digital-marketing/social-media-marketing"],
    ["content", "https://www.netmatters.co.uk/digital-marketing/content-marketing"]
  ],
  'cybs': [
    ["assessment", "https://www.netmatters.co.uk/cyber-security/cyber-security-assessment"],
    ["management", "https://www.netmatters.co.uk/cyber-security/cyber-security-management"],
    ["penetration testing", "https://www.netmatters.co.uk/cyber-security/cyber-penetration-testing"],
    ["cyber essentials", "https://www.netmatters.co.uk/cyber-security/cyber-essentials-certification"],
    ["pci / dss", "https://www.netmatters.co.uk/cyber-security/pci-compliance"],
    ["hacker prevention", "https://www.netmatters.co.uk/cyber-security/hacker-prevention"]
  ]
}

const nav = document.querySelector('.nav_bar_container');

nav.addEventListener("mouseover", function (e) {
  if (e.target.classList[0] == 'nav_list_item') {
    if (sub.childNodes.length > 0) {
      sub.removeChild(sub.childNodes[0])
    };

    const navItem = e.target;
    //get category
    const classes = navItem.classList;
    let id = classes[1].slice(9);

    //show the sublist container
    sub.style.visibility = "visible";

    //set colors based on category
    sub.style.backgroundColor = themesDarker[id];
    navItem.style.backgroundColor = themes[id];
    let icon = navItem.childNodes[1];
    icon.style.color = 'white';

    //generate sublist for category
    let list = document.createElement("div");
    sub.appendChild(list);
    list.classList.add("nav_list_item_sublist");
    list.classList.add("standard");
    list.style.visibility = "visible";

    //generate sublist links for category and append
    for (let i = 0; i < submenu[id].length; i++) {
      let link = document.createElement("a");
      link.classList.add("nav_list_item_sublist_item");
      link.href = submenu[id][i][1];
      link.innerText = submenu[id][i][0];
      list.appendChild(link);
    }

    //keep sublist visible when mouse on sublist
    sub.onmouseenter = function () {
      sub.style.visibility = "visible";
      list.style.visibility = "visible";
      navItem.style.backgroundColor = themes[id];
      icon.style.color = "white";
    }

    //hide sublist and revert colors when user moves mouse away
    navItem.onmouseleave = function () {
      sub.style.visibility = 'hidden';
      list.style.visibility = 'hidden';
      navItem.style.backgroundColor = 'transparent';
      icon.style.color = themes[id];
    }

    sub.onmouseleave = function () {
      sub.style.visibility = 'hidden';
      list.style.visibility = 'hidden';
      navItem.style.backgroundColor = 'transparent';
      icon.style.color = themes[id];
    }
  };
})