// components/list-group/list-group.js
Component({
  relations: {
    '../list/index': {
      type: 'child',
      linked() {
        this._checkLastOne()
      },
      linkChanged() {
        this._checkLastOne()
      },
      unlinked() {
        this._checkLastOne()
      }
    }
  },
  properties: {

  },

  data: {

  },

  methods: {
    _checkLastOne () {
      let lists = this.getRelationNodes('../list/index')

      if (lists.length > 0) {
        let lastIndex = lists.length - 1

        lists.forEach((list, index) => {
          list._setFirstOne(true)
          list._setLastOne(index === lastIndex)
        })
      }
    }
  }
})
