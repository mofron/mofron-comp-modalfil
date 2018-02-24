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
mf.comp.Modal = class extends mf.Component {
    
    constructor (po) {
        try {
            super();
            this.name('Modal');
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
            this.size('100%', '100%');
            this.style({
                'position' : 'fixed',
                'z-index'  : '9999'
            });
            
            this.color(
                new mf.Color(240,240,240, this.clearVal())
            );
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    clearVal (val) {
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
    
    blur (val, tgt) {
        try {
            if (undefined === val) {
                /* getter */
                return (undefined === this.m_blur_val) ? null : this.m_blur_val;
            }
            /* setter  */
            if (('number' !== typeof val) || (null === tgt)) {
                throw new Error('invalid parameter');
            }
            this.blurTgt(tgt);
            this.m_blur_val = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    blurTgt (val) {
        try {
            if (undefined === val) {
                /* getter */
                return (undefined === this.m_blur_tgt) ? null : this.m_blur_tgt;
            }
            /* setter */
            if (true !== mf.func.isInclude(val, 'Component')) {
                throw new Error('invalid parameter');
            }
            this.m_blur_tgt = val;
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
                if ( (true === val) && (null !== this.blurTgt())) {
                    let exe_blur = new Blur();
                    exe_blur.value(this.blur());
                    this.blurTgt().addEffect(exe_blur);
                    exe_blur.execute(true);
                } else if ( (false === val) && (null !== this.blurTgt()) ) {
                    let tgt_blur = this.blurTgt().getConfig('effect', 'Blur');
                    tgt_blur.execute(false);
                    /* delete  blur */
                }
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    themeConts () {
        try {
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
}
module.exports = mofron.comp.Modal;
