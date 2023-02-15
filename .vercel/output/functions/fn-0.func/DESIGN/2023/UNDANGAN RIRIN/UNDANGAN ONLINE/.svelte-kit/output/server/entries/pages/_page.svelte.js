import { c as create_ssr_component, v as validate_component, b as subscribe, e as escape, d as add_styles, f as add_attribute, h as each } from "../../chunks/index2.js";
import "photoswipe/dist/photoswipe-lightbox.esm.js";
import "photoswipe/dist/photoswipe.esm.js";
import { w as writable } from "../../chunks/index.js";
import { createClient } from "@supabase/supabase-js";
import moment from "moment";
const Ornamen_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ".top-left.svelte-i6da0v{position:absolute;top:0;left:0;pointer-events:none}.top-right.svelte-i6da0v{position:absolute;top:0;right:0;pointer-events:none}.bottom-right.svelte-i6da0v{position:absolute;bottom:0;right:0;pointer-events:none}.bottom-left.svelte-i6da0v{position:absolute;bottom:0;left:0;pointer-events:none}",
  map: null
};
const Ornamen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$c);
  return `<div class="${"top-left svelte-i6da0v"}"><img src="${"https://dinvite.online/themes/elegant-brown-leaves/images/frame-tl-v2.png"}" alt="${""}" width="${"200px"}"></div>
    <div class="${"top-right svelte-i6da0v"}"><img src="${"https://dinvite.online/themes/elegant-brown-leaves/images/frame-tr-v2.png"}" alt="${""}" width="${"350px"}"></div>
    <div class="${"bottom-right svelte-i6da0v"}"><img src="${"https://dinvite.online/themes/elegant-brown-leaves/images/frame-br-v2.png"}" alt="${""}" width="${"200px"}"></div>
    <div class="${"bottom-left svelte-i6da0v"}"><img src="${"https://dinvite.online/themes/elegant-brown-leaves/images/frame-bl-v2.png"}" alt="${""}" width="${"350px"}"></div>`;
});
const Closing_svelte_svelte_type_style_lang = "";
const css$b = {
  code: ".closing.svelte-1ceete7.svelte-1ceete7{min-height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column;gap:1rem}.title.svelte-1ceete7.svelte-1ceete7{font-family:'Alex Brush', cursive;font-size:2.5rem;font-weight:600;color:#dba400;margin-bottom:15rem}.date.svelte-1ceete7.svelte-1ceete7{font-weight:bold;font-size:smaller}.powered.svelte-1ceete7 p.svelte-1ceete7{font-style:italic}.powered.svelte-1ceete7 img.svelte-1ceete7{width:150px}",
  map: null
};
const Closing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$b);
  return `<section class="${"closing svelte-1ceete7"}">${validate_component(Ornamen, "Ornamen").$$render($$result, {}, {}, {})}
  <p class="${"text"}">Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do&#39;a restu kepada kedua mempelai.</p>
  <p class="${"date svelte-1ceete7"}">Kamis, 23 Februari 2023</p>
  <p class="${"title svelte-1ceete7"}">Randhya &amp; Ririn</p>
  <div class="${"powered svelte-1ceete7"}"><p class="${"svelte-1ceete7"}">Powered by</p>
    <a href="${"https://dinvite.online"}"><img src="${"https://s3.ap-southeast-1.wasabisys.com/ajakan/photo/mitra_logo/16678378513121.png"}" alt="${""}" class="${"svelte-1ceete7"}"></a></div>
</section>`;
});
const flexbin = "";
const photoswipe = "";
const PhotoSwipeGallery_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".gallery.styling-flex.svelte-fjes6j.svelte-fjes6j.svelte-fjes6j{display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:center;gap:0.5rem}.gallery.styling-grid.svelte-fjes6j.svelte-fjes6j.svelte-fjes6j{display:grid;grid-template-columns:repeat(var(--grid-columns), minmax(0, 1fr));justify-items:center;align-items:center;gap:0.5rem}.gallery.svelte-fjes6j>a.svelte-fjes6j>img.svelte-fjes6j{vertical-align:bottom;max-width:100%;height:auto}",
  map: null
};
const PhotoSwipeGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_options;
  let { images } = $$props;
  let { individual = false } = $$props;
  let { styling = "none" } = $$props;
  let { gridColumns = 5 } = $$props;
  let element;
  const options = writable(void 0);
  $$unsubscribe_options = subscribe(options, (value) => value);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.individual === void 0 && $$bindings.individual && individual !== void 0)
    $$bindings.individual(individual);
  if ($$props.styling === void 0 && $$bindings.styling && styling !== void 0)
    $$bindings.styling(styling);
  if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0)
    $$bindings.gridColumns(gridColumns);
  $$result.css.add(css$a);
  $$unsubscribe_options();
  return `<div class="${"gallery styling-" + escape(styling, true) + " svelte-fjes6j"}"${add_styles({ "--grid-columns": gridColumns })}${add_attribute("this", element, 0)}>${each(images, (img) => {
    let thumb = img.thumbnail ?? img;
    return `
    <a${add_attribute("href", img.src, 0)}${add_attribute("data-pswp-width", img.width, 0)}${add_attribute("data-pswp-height", img.height, 0)} target="${"_blank"}" class="${"svelte-fjes6j"}"><img${add_attribute("src", thumb.src, 0)}${add_attribute("alt", img.alt ?? "", 0)}${add_attribute("width", thumb.width, 0)}${add_attribute("height", thumb.height, 0)} class="${"svelte-fjes6j"}"></a>`;
  })}
</div>`;
});
const Galleries_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".galleries.svelte-l1d26r{min-height:100vh;padding-top:8rem}.title.svelte-l1d26r{font-family:'Alex Brush', cursive;font-size:1.8rem;font-weight:600;color:#dba400}.container.svelte-l1d26r{margin-top:2rem}",
  map: null
};
const Galleries = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [
    {
      src: "https://placebear.com/1920/1080",
      height: 1080,
      width: 1920,
      alt: "Test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      src: "https://placebear.com/600/400",
      width: 600,
      height: 400,
      description: '<a href="https://google.com">Google</a>'
    },
    {
      src: "https://placebear.com/400/400",
      width: 4e3,
      height: 4e3,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit2",
      alt: "Random"
    }
  ];
  $$result.css.add(css$9);
  return `<section class="${"galleries svelte-l1d26r"}">${validate_component(Ornamen, "Ornamen").$$render($$result, {}, {}, {})}
  <div class="${"title svelte-l1d26r"}">Our Gallery</div>
  <div class="${"container svelte-l1d26r"}">${validate_component(PhotoSwipeGallery, "PhotoSwipeGallery").$$render($$result, { images, styling: "flex" }, {}, {})}</div>
</section>`;
});
const Story_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".story.svelte-izjqln.svelte-izjqln{min-height:100vh;padding-top:8rem}.title.svelte-izjqln.svelte-izjqln{font-family:'Alex Brush', cursive;font-size:1.8rem;font-weight:600;color:#dba400}.story-img.svelte-izjqln.svelte-izjqln{width:248px;height:195px;margin:auto;overflow:hidden;transform:translate(15px, 24px) rotate(356deg);border:4px solid #dba400}.story-img.svelte-izjqln img.svelte-izjqln{width:100%;height:100%;object-fit:cover}.story-content.svelte-izjqln.svelte-izjqln{background-color:#dba400;position:relative;padding:14px;border-radius:20px;margin-bottom:5rem}.story-2.svelte-izjqln.svelte-izjqln{transform:translate(-7px, 0px) rotate(2deg);margin-bottom:-20px}.subtitle.svelte-izjqln.svelte-izjqln{font-weight:bold}",
  map: null
};
const Story = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<section class="${"story svelte-izjqln"}">${validate_component(Ornamen, "Ornamen").$$render($$result, {}, {}, {})}
  <p class="${"title svelte-izjqln"}">Our Story</p>
  <div class="${"content"}"><div class="${"story-img story-1 svelte-izjqln"}"><img src="${"https://dinvite.online/themes/assets/demo/preview12/1.jpg"}" alt="${""}" class="${"svelte-izjqln"}"></div>
    <div class="${"story-content svelte-izjqln"}"><svg width="${"24"}" height="${"24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path opacity="${".4"}" d="${"M11.776 21.837a36.258 36.258 0 0 1-6.328-4.957 12.668 12.668 0 0 1-3.03-4.805C1.278 8.535 2.603 4.49 6.3 3.288A6.282 6.282 0 0 1 12.007 4.3a6.291 6.291 0 0 1 5.706-1.012c3.697 1.201 5.03 5.247 3.893 8.787a12.67 12.67 0 0 1-3.013 4.805 36.58 36.58 0 0 1-6.328 4.957l-.25.163-.24-.163Z"}" fill="${"currentColor"}"></path><path d="${"m12.01 22-.234-.163a36.316 36.316 0 0 1-6.337-4.957 12.667 12.667 0 0 1-3.048-4.805c-1.13-3.54.195-7.586 3.892-8.787a6.296 6.296 0 0 1 5.728 1.023V22ZM18.23 10a.719.719 0 0 1-.517-.278.818.818 0 0 1-.167-.592c.022-.702-.378-1.341-.994-1.59-.391-.107-.628-.53-.53-.948.093-.41.477-.666.864-.573a.384.384 0 0 1 .138.052c1.236.476 2.036 1.755 1.973 3.155a.808.808 0 0 1-.23.56.708.708 0 0 1-.537.213Z"}" fill="${"currentColor"}"></path></svg>
      <p class="${"subtitle svelte-izjqln"}">Awal Cerita</p>
      <p>Tahun 2016</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid provident nam quibusdam nisi obcaecati possimus quo minus! Placeat ab nostrum numquam natus totam minima ratione dolor porro non, iste nulla.</p></div>
    <div class="${"story-img story-2 svelte-izjqln"}"><img src="${"https://dinvite.online/themes/assets/demo/preview12/1.jpg"}" alt="${""}" class="${"svelte-izjqln"}"></div>
    <div class="${"story-content svelte-izjqln"}"><svg width="${"24"}" height="${"24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path opacity="${".4"}" d="${"M11.776 21.837a36.258 36.258 0 0 1-6.328-4.957 12.668 12.668 0 0 1-3.03-4.805C1.278 8.535 2.603 4.49 6.3 3.288A6.282 6.282 0 0 1 12.007 4.3a6.291 6.291 0 0 1 5.706-1.012c3.697 1.201 5.03 5.247 3.893 8.787a12.67 12.67 0 0 1-3.013 4.805 36.58 36.58 0 0 1-6.328 4.957l-.25.163-.24-.163Z"}" fill="${"currentColor"}"></path><path d="${"m12.01 22-.234-.163a36.316 36.316 0 0 1-6.337-4.957 12.667 12.667 0 0 1-3.048-4.805c-1.13-3.54.195-7.586 3.892-8.787a6.296 6.296 0 0 1 5.728 1.023V22ZM18.23 10a.719.719 0 0 1-.517-.278.818.818 0 0 1-.167-.592c.022-.702-.378-1.341-.994-1.59-.391-.107-.628-.53-.53-.948.093-.41.477-.666.864-.573a.384.384 0 0 1 .138.052c1.236.476 2.036 1.755 1.973 3.155a.808.808 0 0 1-.23.56.708.708 0 0 1-.537.213Z"}" fill="${"currentColor"}"></path></svg>
      <p class="${"subtitle svelte-izjqln"}">Awal Cerita</p>
      <p>Tahun 2016</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid provident nam quibusdam nisi obcaecati possimus quo minus! Placeat ab nostrum numquam natus totam minima ratione dolor porro non, iste nulla.</p></div>
    <div class="${"story-img story-3 svelte-izjqln"}"><img src="${"https://dinvite.online/themes/assets/demo/preview12/1.jpg"}" alt="${""}" class="${"svelte-izjqln"}"></div>
    <div class="${"story-content svelte-izjqln"}"><svg width="${"24"}" height="${"24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path opacity="${".4"}" d="${"M11.776 21.837a36.258 36.258 0 0 1-6.328-4.957 12.668 12.668 0 0 1-3.03-4.805C1.278 8.535 2.603 4.49 6.3 3.288A6.282 6.282 0 0 1 12.007 4.3a6.291 6.291 0 0 1 5.706-1.012c3.697 1.201 5.03 5.247 3.893 8.787a12.67 12.67 0 0 1-3.013 4.805 36.58 36.58 0 0 1-6.328 4.957l-.25.163-.24-.163Z"}" fill="${"currentColor"}"></path><path d="${"m12.01 22-.234-.163a36.316 36.316 0 0 1-6.337-4.957 12.667 12.667 0 0 1-3.048-4.805c-1.13-3.54.195-7.586 3.892-8.787a6.296 6.296 0 0 1 5.728 1.023V22ZM18.23 10a.719.719 0 0 1-.517-.278.818.818 0 0 1-.167-.592c.022-.702-.378-1.341-.994-1.59-.391-.107-.628-.53-.53-.948.093-.41.477-.666.864-.573a.384.384 0 0 1 .138.052c1.236.476 2.036 1.755 1.973 3.155a.808.808 0 0 1-.23.56.708.708 0 0 1-.537.213Z"}" fill="${"currentColor"}"></path></svg>
      <p class="${"subtitle svelte-izjqln"}">Awal Cerita</p>
      <p>Tahun 2016</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid provident nam quibusdam nisi obcaecati possimus quo minus! Placeat ab nostrum numquam natus totam minima ratione dolor porro non, iste nulla.</p></div></div>
</section>`;
});
createClient(
  "https://xyxsiuaxedneofkbjsej.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5eHNpdWF4ZWRuZW9ma2Jqc2VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0MjU3NTUsImV4cCI6MTk4OTAwMTc1NX0.8MBu6aioyxUwOCrpGaEXXtlznwTHgP9zafPmxVCDqAQ"
);
const Wallet_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".wallet.svelte-osfh86{min-height:100vh}",
  map: null
};
const Wallet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<section class="${"wallet svelte-osfh86"}">${validate_component(Ornamen, "Ornamen").$$render($$result, {}, {}, {})}
  <div class="${"title"}">Wallet</div>
  <p class="${"text"}">Jika berkenan memberikan hadiah, bisa dikirim melalui rekening berikut</p>
</section>`;
});
const Wish_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".wish.svelte-jras55{min-height:100vh;padding-top:8rem}.title.svelte-jras55{font-family:'Alex Brush', cursive;font-size:2.5rem;font-weight:600;color:#dba400;margin-bottom:1.5rem}form.svelte-jras55{position:relative;z-index:999;display:flex;flex-direction:column}.form-group.svelte-jras55{margin-bottom:0.7em}.form-control.svelte-jras55{appearance:none;display:block;width:100%;padding:10px;outline:none;border-radius:7px;border:1px solid rgba(0, 0, 0, 0.2);font-weight:500;background:#fff;cursor:text;font-family:inherit}textarea.svelte-jras55{resize:none;min-height:100px;width:100%}button.svelte-jras55{background-color:#dba400;color:whitesmoke;padding:8px 20px;border-radius:5px;outline:none;border:none;cursor:pointer}.comments.svelte-jras55{margin-top:1rem;text-align:left;z-index:999;position:relative;max-height:50rem;overflow:hidden;overflow-y:scroll;padding-inline:.5rem}.comments.svelte-jras55::-webkit-scrollbar{width:5px}.comments.svelte-jras55::-webkit-scrollbar-track{background:#f1f1f1}.comments.svelte-jras55::-webkit-scrollbar-thumb{background:#dba400}.comment.svelte-jras55{margin-bottom:1rem;background-color:whitesmoke;padding:1.5rem;border-radius:10px}.name.svelte-jras55{font-size:1.3rem;font-weight:600;color:#dba400;margin-bottom:0.5rem}.date.svelte-jras55{font-size:.8rem;margin-top:1rem}",
  map: null
};
const Wish = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let comments = [];
  let name;
  let form;
  const relativeTime = (timestamp) => {
    return moment(timestamp).fromNow();
  };
  $$result.css.add(css$6);
  return `<section class="${"wish svelte-jras55"}">${validate_component(Ornamen, "Ornamen").$$render($$result, {}, {}, {})}
  <div class="${"title svelte-jras55"}">Wedding Wish</div>
  <form class="${"svelte-jras55"}"${add_attribute("this", form, 0)}><div class="${"form-group svelte-jras55"}"><input type="${"text"}" placeholder="${"Name"}" name="${"guest-name"}" class="${"form-control svelte-jras55"}" autocomplete="${"none"}" required${add_attribute("value", name, 0)}></div>
    <div class="${"form-group svelte-jras55"}"><textarea class="${"form-control svelte-jras55"}" rows="${"1"}" name="${"comment"}" placeholder="${"Give your wish..."}" required>${""}</textarea></div>
    <button class="${"svelte-jras55"}">Send</button></form>
  <div class="${"comments svelte-jras55"}">

    ${each(comments, (comment) => {
    return `<div class="${"comment svelte-jras55"}"><div class="${"name svelte-jras55"}">${escape(comment.name)}</div>
      <p class="${"text"}">${escape(comment.comment)}</p>
      <p class="${"date svelte-jras55"}">${escape(relativeTime(comment.created_at))}</p>
    </div>`;
  })}</div>
</section>`;
});
const Brides_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".brides.svelte-1cyekfd.svelte-1cyekfd{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:1rem;padding-top:8rem;padding-bottom:3rem}.title.svelte-1cyekfd.svelte-1cyekfd{font-family:'Alex Brush', cursive;font-size:2.5rem;font-weight:600;color:#dba400}.text.svelte-1cyekfd.svelte-1cyekfd{margin-bottom:2rem}.picture.svelte-1cyekfd.svelte-1cyekfd{width:200px;height:200px;border-radius:100%;position:relative}.picture.svelte-1cyekfd.svelte-1cyekfd::before{content:'';position:absolute;top:50%;left:50%;width:100%;height:100%;width:calc(100% + 12px);height:calc(100% + 12px);border-radius:inherit;transform:translate(-50%, -50%);border:2px solid #dba400;background-color:transparent}.picture.svelte-1cyekfd img.svelte-1cyekfd{width:100%;height:100%;object-fit:cover;border-radius:inherit}.name.svelte-1cyekfd.svelte-1cyekfd{font-family:'Alex Brush', cursive;font-size:1.5rem;font-weight:600;color:#dba400}span.svelte-1cyekfd.svelte-1cyekfd{font-weight:bold;color:#292929}",
  map: null
};
const Brides = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section class="${"brides svelte-1cyekfd"}">${validate_component(Ornamen, "Ornamen").$$render($$result, {}, {}, {})}
    <div class="${"title svelte-1cyekfd"}">Assalamualaikum wr. wb.</div>
    <p class="${"text svelte-1cyekfd"}">Dengan memohon Rahmat dan Ridho Allah SWT kami bermaksud untuk mengundang saudara/i untuk menghadiri acara pernikahan putra - putri kami :</p>
    <div class="${"picture svelte-1cyekfd"}"><img src="${"https://dinvite.online/themes/assets/demo/preview12/2.jpg"}" alt="${""}" class="${"svelte-1cyekfd"}"></div>
    <p class="${"name svelte-1cyekfd"}">Randhya Sakthika Putra</p>
    <p class="${"detail"}">Putra ke tiga dari <br> <span class="${"svelte-1cyekfd"}">Bpk. Akmal Thaib &amp; Ibu Mursida (Alm) </span></p>
    <p style="${"color: #dba400; font-size: 8rem; font-family: Alex Brush, cursive"}">&amp;</p>
    <div class="${"picture svelte-1cyekfd"}"><img src="${"https://dinvite.online/themes/assets/demo/preview12/3.jpg"}" alt="${""}" class="${"svelte-1cyekfd"}"></div>
    <p class="${"name svelte-1cyekfd"}">Ririn Indriani Laimu</p>
    <p class="${"detail"}">Putri pertama dari <br> <span class="${"svelte-1cyekfd"}">Bpk. Sainuddin Laimu &amp; Ibu Juwita Andriani </span></p>
    <a style="${"text-decoration: none; display: flex;"}" href="${"https://www.instagram.com/ririnindriiiany/"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"icon icon-tabler icon-tabler-brand-instagram"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"#dba400"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><rect x="${"4"}" y="${"4"}" width="${"16"}" height="${"16"}" rx="${"4"}"></rect><circle cx="${"12"}" cy="${"12"}" r="${"3"}"></circle><line x1="${"16.5"}" y1="${"7.5"}" x2="${"16.5"}" y2="${"7.501"}"></line></svg>
      <p style="${"color: #dba400;"}">@ririnindriiiany</p></a>
  </section>`;
});
const Cover_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".cover.svelte-1d8o94q.svelte-1d8o94q{position:fixed;height:100vh;top:0;left:50%;transform:translateX(-50%);text-align:center;display:flex;justify-content:space-evenly;align-items:center;flex-direction:column;z-index:9999}.cover.hidden.svelte-1d8o94q.svelte-1d8o94q{transform:translate(-50%, -100%);transition:all 0.3s ease-in-out}.cover.svelte-1d8o94q .title.svelte-1d8o94q{font-family:'Alex Brush', cursive;font-size:2.5rem;font-weight:600;color:#dba400}.cover.svelte-1d8o94q .guest-name.svelte-1d8o94q{color:#dba400;font-size:1.3rem;font-weight:bold}.cover.svelte-1d8o94q .cover-img.svelte-1d8o94q{width:160px;height:160px;border-radius:100%;object-fit:cover}.cover.svelte-1d8o94q .open-cover.svelte-1d8o94q{display:inline-block;text-align:center;white-space:nowrap;vertical-align:middle;user-select:none;padding:0.375rem 0.75rem;font-size:1rem;background-color:#dba400;border:none;color:whitesmoke;border-radius:50rem;cursor:pointer}",
  map: null
};
const Cover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="${"cover " + escape("", true) + " svelte-1d8o94q"}">${validate_component(Ornamen, "Ornamen").$$render($$result, {}, {}, {})}
    
    <p>The Wedding of</p>
    <p class="${"title svelte-1d8o94q"}">Randhya &amp; Ririn</p>
    <img class="${"cover-img svelte-1d8o94q"}" src="${"https://dinvite.online/themes/assets/demo/preview12/4.jpg"}" alt="${"cover"}">
    <p class="${"dear"}">Kepada Yth. <br> Bapak/Ibu/Saudara/i:</p>
    <p class="${"guest-name svelte-1d8o94q"}">Nama Tamu</p>
    <button class="${"open-cover svelte-1d8o94q"}">Buka Undangan</button>
  </section>`;
});
const Events_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".events.svelte-1se9mta{min-height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column}.title.svelte-1se9mta{font-family:'Alex Brush', cursive;font-size:1.8rem;font-weight:600;color:#dba400}.detail.svelte-1se9mta{margin-bottom:3rem}.countdown.svelte-1se9mta{display:flex;justify-content:center;align-items:center;width:100%;gap:1rem}.countdown-item.svelte-1se9mta{width:calc(100% / 4);background-color:#dba400;border-radius:10px;color:whitesmoke}button.svelte-1se9mta{display:inline-block;text-align:center;white-space:nowrap;vertical-align:middle;user-select:none;padding:0.375rem 0.75rem;font-size:1rem;background-color:#dba400;border:none;color:whitesmoke;border-radius:50rem;cursor:pointer;margin-top:2rem}",
  map: null
};
const Events = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="${"events svelte-1se9mta"}">${validate_component(Ornamen, "Ornamen").$$render($$result, {}, {}, {})}
  <div class="${"title svelte-1se9mta"}">Akad Nikah</div>
  <p class="${"detail svelte-1se9mta"}">Kamis, 23 Februari 2023 <br> 15:15 Wita <br> Estrella Hotel &amp; Conference Center - Luwuk</p>
  <div class="${"title svelte-1se9mta"}">Resepsi Pernikahan</div>
  <p class="${"detail svelte-1se9mta"}">Kamis, 23 Februari 2023 <br> 20:00 Wita - Selesai <br> Estrella Hotel &amp; Conference Center - Luwuk</p>
  <div class="${"countdown svelte-1se9mta"}"><div class="${"countdown-item svelte-1se9mta"}"><div class="${"number"}">15</div>
      <div class="${"text"}">Hari</div></div>
    <div class="${"countdown-item svelte-1se9mta"}"><div class="${"number"}">15</div>
      <div class="${"text"}">Jam</div></div>
    <div class="${"countdown-item svelte-1se9mta"}"><div class="${"number"}">15</div>
      <div class="${"text"}">Menit</div></div>
    <div class="${"countdown-item svelte-1se9mta"}"><div class="${"number"}">15</div>
      <div class="${"text"}">Detik</div></div></div>
  <button class="${"svelte-1se9mta"}">Save to Calendar</button>
</section>`;
});
const Map_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".map.svelte-qhvi5.svelte-qhvi5{min-height:100vh}.embed.svelte-qhvi5.svelte-qhvi5{display:flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;z-index:100;width:100%;height:500px;left:0;top:10rem;padding:1rem}.embed.svelte-qhvi5 iframe.svelte-qhvi5{width:100%;height:100%;border-radius:15px;border:3px solid #dba400}button.svelte-qhvi5.svelte-qhvi5{display:inline-block;text-align:center;white-space:nowrap;vertical-align:middle;user-select:none;padding:0.375rem 0.75rem;font-size:1rem;background-color:#dba400;border:none;color:whitesmoke;border-radius:50rem;cursor:pointer;margin-top:2rem}",
  map: null
};
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="${"map svelte-qhvi5"}">${validate_component(Ornamen, "Ornamen").$$render($$result, {}, {}, {})}
  <div class="${"embed svelte-qhvi5"}">
 <iframe src="${"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2142029141473!2d122.79077731525429!3d-0.9970736356615164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d86a143afd18541%3A0xd1052911d7aedda4!2sEstrella%20Hotel%20%26%20Conference%20Center%20-%20Luwuk!5e0!3m2!1sid!2sid!4v1676395996400!5m2!1sid!2sid"}" allowfullscreen="${""}" loading="${"lazy"}" referrerpolicy="${"no-referrer-when-downgrade"}" class="${"svelte-qhvi5"}"></iframe>
 <button class="${"svelte-qhvi5"}">Arahkan ke Lokasi</button></div>
 
</section>`;
});
const Opening_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".opening.svelte-17g29vr{min-height:100vh;display:flex;justify-content:start;align-items:center;flex-direction:column;padding-top:8rem}.frame.svelte-17g29vr{position:absolute;bottom:0;height:70%;width:80%;border-top-left-radius:250px;border-top-right-radius:250px;background-image:url('https://dinvite.online/themes/assets/demo/preview12/4.jpg');background-position:center center;background-repeat:no-repeat;background-size:cover}.title.svelte-17g29vr{font-family:'Alex Brush', cursive;font-size:2.5rem;font-weight:600;color:#dba400}",
  map: null
};
const Opening = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="${"opening svelte-17g29vr"}">${validate_component(Ornamen, "Ornamen").$$render($$result, {}, {}, {})}
    <p>The Wedding of</p>
    <p class="${"title svelte-17g29vr"}">Randhya &amp; Ririn</p>
    <p class="${"date"}">Kamis, 23 Februari 2023</p>
    <div class="${"frame svelte-17g29vr"}"></div>
  </section>`;
});
const style = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-q13di8{display:flex;justify-content:center;align-items:center;flex-direction:column}.quotes.svelte-q13di8{text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-q13di8"}">${validate_component(Cover, "Cover").$$render($$result, {}, {}, {})}
  ${validate_component(Opening, "Opening").$$render($$result, {}, {}, {})}
  <section class="${"quotes svelte-q13di8"}"><p>Every love story is beautiful, but ours is the best one. I loved her since the first time I saw her. My mother told me to pick the very best one, and I did. True love stories never have endings.</p></section>
  ${validate_component(Brides, "Brides").$$render($$result, {}, {}, {})}
  ${validate_component(Events, "Events").$$render($$result, {}, {}, {})}
  ${validate_component(Map, "Map").$$render($$result, {}, {}, {})}
  ${validate_component(Story, "Story").$$render($$result, {}, {}, {})}
  ${validate_component(Galleries, "Galleries").$$render($$result, {}, {}, {})}
  ${validate_component(Wallet, "Wallet").$$render($$result, {}, {}, {})}
  ${validate_component(Wish, "Wish").$$render($$result, {}, {}, {})}
  ${validate_component(Closing, "Closing").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
