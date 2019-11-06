export default {
  data () {
    return {
      customOptions: [
        { label: 'primary', value: 'primary' },
        { label: 'info', value: 'info' },
        { label: 'success', value: 'success' },
        { label: 'warning', value: 'warning' },
        { label: 'error', value: 'error' },
        { label: 'default', value: '' }
      ],
      sizeOptions: [
        { label: 'large', value: 'large' },
        { label: 'small', value: 'small' },
        { label: 'mini', value: 'mini' },
        { label: 'default', value: '' }
      ],
      propsThead: [
        { label: '属性', value: 'label' },
        { label: '类型', value: 'type' },
        { label: '说明', value: 'introduce' },
        { label: '默认值', value: 'default' }
      ],
      eventsThead: [
        { label: '事件名称', value: 'name' },
        { label: '说明', value: 'introduce' },
        { label: '返回值', value: 'return' }
      ],
      slotThead: [
        { label: '名称', value: 'name' },
        { label: '说明', value: 'introduce' }
      ],
      modifiersThead: [
        { label: '修饰符', value: 'name' },
        { label: '说明', value: 'introduce' }
      ],
      valueThead: [
        { label: '绑定值', value: 'name' },
        { label: '类型', value: 'type' },
        { label: '说明', value: 'introduce' },
        { label: '默认值', value: 'default' }
      ]
    }
  },
  methods: {
    copy (e) {
      let tag = e.target;
      if (!tag.className) {
        tag.nextSibling.select();
        document.execCommand("Copy");

        tag.innerHTML = 'Copied';
        tag.className = 'success';
        setTimeout(() => {
          tag.className = '';
          tag.innerHTML = 'Copy';
        }, 5000);
      }
    },
    HLJSON (value) {
      return value.replace(/"[^"]*"/g, val => `<em ${ /sgxq-/.test(val) ? 'error' : 'success' }>${ val }</em>`)
    },
    HLHTML (value) {
      return value
        .replace(/</g, '&lt;')
        .replace(/&lt;[^>]*>/g, val => `<em>${ val }</em>`)
        .replace(/"[^"]*"/g, val => `<em success>${ val }</em>`)
        .replace(/class|bind[^=]*/g, val => `<em error>${ val }</em>`);
    },
    HTJAVA (value) {
      const val = value
        .replace(/this/g, val => `<em error>${ val }</em>`)
        // .replace(/\s[^:]*/g, val => `<em error>${ val }</em>`)
        .replace(/'[^']*'/g, val => `<em success>${ val }</em>`)

      return `<em>${ val }</em>`;
    }
  }
}