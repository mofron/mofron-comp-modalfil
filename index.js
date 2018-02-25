/**
 * @file   mofron-comp-modal/index.js
 * @brief  modal component for mofron
 * @author simpart
 */
let mf = require('mofron');
let Blur = require('mofron-effect-blur');

/**
 * @class mofron.comp.Modal
 * @brief modal component class
 */
mf.comp.ModalFil = class extends mf.Component {
    
    constructor (po) {
        try {
            super();
            this.name('ModalFil');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : (Date object) display date
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
            this.size(
                '100%',
                window.innerHeight
            );
            
            this.style({
                'position' : 'fixed',
                'z-index'  : '9999'
            });
            
            /* set default color */
            this.color(
                new mf.Color(240,240,240, this.clear())
            );
            
            /* set window resize event */
            mf.func.addResizeWin(
                (prm) => {
                    try {
                        prm.height(window.innerHeight);
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                this
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    clear (val) {
        try {
            if (undefined === val) {
                /* getter */
                return (undefined === this.m_clear) ? 0.5 : this.m_clear;
            }
            /* setter */
            if ('number' !== typeof val) {
                throw new Error('invalid parameter');
            }
            this.m_clear = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    blur (val) {
        try {
            if (undefined === val) {
                /* getter */
                return (undefined === this.m_blur_val) ? null : this.m_blur_val;
            }
            /* setter  */
            if ('number' !== typeof val) {
                throw new Error('invalid parameter');
            }
            this.m_blur_val = val;
            if (true === this.visible()) {
                this.execBlur(val);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    execBlur () {
        try {
            if ( (null !== this.blur()) && (undefined !== document.body) )  {
                let set_blur = (true === this.visible()) ? this.blur() : 0;
                document.body.style['filter'] = 'blur(' + set_blur + 'px)';
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    visible (val) {
        try {
            let ret = super.visible(val);
            if (undefined === ret) {
                /* setter */
                this.execBlur();
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.ModalFil;
