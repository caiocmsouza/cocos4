cc.Class({
    extends: cc.Component,

    properties: {
        _animacao : cc.Animation,
    },

    onLoad: function () {
        this._animacao = this.getComponent(cc.Animation);
        this._animacao.play("AndarBaixo");
    },

    mudaAnimacao : function(direcao, estado){
        let proximaAnimacao = estado;
        
        if(direcao.x > 0){
            proximaAnimacao += "Direita";
        }else if(direcao.x < 0){
            proximaAnimacao += "Esquerda";
        }
        
        if(direcao.y > 0){
            proximaAnimacao += "Cima";
        }else if(direcao.y <0){
            proximaAnimacao += "Baixo";
        }
    
        if(!this._animacao.getAnimationState(proximaAnimacao).isPlaying){
            this._animacao.play(proximaAnimacao);
        }
    }
   
});
