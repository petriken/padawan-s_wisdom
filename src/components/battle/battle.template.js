export default `
<!--Battle content-->
  <header>
    <div class="progress-bar-wrapper">
      <div class="progress-bar-wrapper__left">
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-warning progress-bar-animated progress-bar-value__left"
            role="progressbar" style="width: 100%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div class="progress-bar-wrapper__right">
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-warning progress-bar-animated progress-bar-value__right"
            role="progressbar" style="width: 100%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  </header>
  <button class="btn-spellSelection" type="button" data-toggle="modal" data-dismiss="modal" data-target="#spellSelection">
    Выберите заклинание</button>
  <div class="battle-content__fight">
    <div class="battle-content__fight_playerFigure-wrapper" id="playerFigure-wrapper">
      <img id="image_id" src="./images/player/image_1.png" alt="playerAvatar" />
      <img id="playerFire-image_id" src="./images/player/fire_1.png" alt="playerAvatar_fire" />
      <img id="playerDamage-image_id" src="./images/player/damage_1.png" alt="playerAvatar_damage" />
    </div>
    <div class="battle-content__fight_canvas-wrapper" id="canvas-wrapper"></div>
    </div>
`
