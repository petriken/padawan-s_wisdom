export default `
<!-- Modal -->
  < div class="modal fade"
id="spellSelection"
tabindex = "-1"
role="dialog"
aria-labelledby="spellSelectionLabel"
aria-hidden="true" >
  <div class="modal-dialog modal-dialog-centered nav_text" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">
          Выбери заклинание, юный падаван
        </h5>
      </div>
      <div class="modal-body">
        <div class="modal-body" id="mathSpell">
          <button type="submit" class="btn btn-primary btn-math" data-dismiss="modal" data-toggle="modal" data-target="#arithmetic">
            Алгебраниум
          </button>
        </div>
        <div class="modal-body" id="LangSpell">
          <button type="submit" class="btn btn-primary" data-dismiss="modal">
            Инглиш
          </button>
        </div>
        <div class="modal-body" id="somethingSpell">
          <button type="submit" class="btn btn-primary" data-dismiss="modal">
            Третье
          </button>
        </div>
      </div>
    </div>
  </div>
</div >

  <div class="modal fade" id="arithmetic" tabindex="-1" role="dialog" aria-labelledby="arithmeticlabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered nav_text" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">Алгебраниум</h5>
        </div>
        <div class="modal-body" id="arithmetic-wrap">
          <form class="modal-body" id="arithmetic-answer-wrap">
            <div class="form-group">
              <label for="arithmetic-answer" aria-required="true">введите правильный ответ</label>
              <input type="number" class="form-control" id="arithmetic-answer" required>
            </div>
              <button type="submit" class="btn btn-primary" id="btn-math-answer" data-dismiss="modal">отправить</button>
          </form>
        </div>
        </div>
      </div>
    </div>`