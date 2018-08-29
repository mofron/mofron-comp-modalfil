/**
 * @file   mofron-comp-modalfil/index.js
 * @brief  modal filter component for mofron
 * @author simpart
 */
const mf = require('mofron');
const Blur = require('mofron-effect-blur');

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
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.size(
                '100%',
                window.innerHeight + 'px'
            );
            
            this.style({
                'position' : 'fixed',
                'z-index'  : '9999',
                'top'      : '0rem',
                'left'     : '0rem'
            });
            
            /* set default color */
            this.baseColor(
                new mf.Color(240,240,240, this.clear())
            );
            
            /* set window resize event */
            mf.func.rsizWinEvent(
                (fil) => {
                    try {
                        fil.height(window.innerHeight + 'px');
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
    
    blur (tgt, val) {
        try {
            if (undefined === tgt) {
                /* getter */
                if ( (null === this.blurTgt()) ||
                     (undefined === this.m_blur)) {
                    return null;
                }
                return this.m_blur;
            }
            /* setter  */
            this.blurTgt(tgt);
            if (undefined !== this.m_blur) {
                this.m_blur.value(val);
            } else {
                this.m_blur = new Blur({
                    value  : val
                });
                this.addEffect(this.m_blur);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.ModalFil;
/* end of file */
