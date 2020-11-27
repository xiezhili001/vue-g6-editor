import eventBus from "@/utils/eventBus";
export default {
    getDefaultCfg() {
        return {
            backKeyCode: 8,
            deleteKeyCode: 46
        };
    },
    getEvents() {
        return {
            keyup: 'onKeyUp',
            keydown: 'onKeyDown'
        };
    },

    onKeyDown(e) {
        const code = e.keyCode || e.which;
        switch (code) {
            case this.deleteKeyCode:
                eventBus.$emit('deleteItem')
                break
            case this.backKeyCode:
                break
        }
    },
    onKeyUp() {
        this.keydown = false;
    }
};
