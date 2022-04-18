/**
 * @swagger
 * /api/cards:
 *   get:
 *     summary: Returns the list of all the cards
 *     tags: [Cards]
 *     responses:
 *       200:
 *         description: The list of the cards (can be empty)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Card'
 *               properties:
 *                 id: 
 *                   type: integer
 *                   example: 1
 *                 name: 
 *                   type: string
 *                   example: "Throw out the trash"
 *                 isCompleted: 
 *                   type: boolean
 *                   example: false
 *                 listId:
 *                   type: integer
 *                   example: 1
 *       500:
 *         description: Internal server error. Could not get cards
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/cards/filter:
 *   get:
 *     summary: Returns the list of all the cards that match specified query
 *     tags: [Cards]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *           required: false
 *           description: Cards' "name" value to filter
 *       - in: query
 *         name: isCompleted
 *         schema:
 *           type: boolean
 *           required: false
 *           description: Cards' "isCompleted" value to filter
 *       - in: query
 *         name: number
 *         schema:
 *           type: string
 *           required: false
 *           description: Cards' "listId" value to filter
 *     responses:
 *       200:
 *         description: The list of the filtered cards
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Card'
 *               properties:
 *                 id: 
 *                   type: integer
 *                   example: 3
 *                 name:
 *                   type: string
 *                   example: "River Runs Through It, A"
 *                 isCompleted: 
 *                   type: boolean
 *                   example: true
 *                 listId:
 *                  type: integer
 *                  example: 1
 *       400:
 *         description: not-number-type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Error'
 *               properties:
 *                 statusCode: 
 *                   type: integer
 *                   example: 4
 *                 name:
 *                   type: string
 *                   example: "not-number-type"
 *                 message: 
 *                   type: string
 *                   example: "The value must be Number"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/cards/{id}:
 *   get:
 *     summary: Returns single card by its id
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Existing card id
 *     responses:
 *       200:
 *         description: Single found card
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Card'
 *               properties:
 *                 id: 
 *                   type: integer
 *                   example: 1
 *                 name: 
 *                   type: string
 *                   example: "Throw out the trash"
 *                 isCompleted: 
 *                   type: boolean
 *                   example: false
 *                 listId:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Card with such id is not defined
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Error'
 *               properties:
 *                 statusCode: 
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "undefined-card"
 *                 message: 
 *                   type: string
 *                   example: "Card in not defined"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/cards:
 *   post:
 *     summary: Adds new card
 *     tags: [Cards]
 *     requestBody:
 *       description: Task to be created.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name 
 *               - listId
 *             properties:
 *               name:
 *                 type: string
 *               listId:
 *                 type: number
 *     responses:
 *       201:
 *         description: Card created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Card'
 *               properties:
 *                 id: 
 *                   type: integer
 *                   example: 1
 *                 message: 
 *                   type: string
 *                   example: "Card added"
 *       400:
 *         description: FOREIGN KEY constraint
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Error'
 *               properties:
 *                 statusCode: 
 *                   type: integer
 *                   example: 9
 *                 name:
 *                   type: string
 *                   example: "no-such-entity"
 *                 message: 
 *                   type: string
 *                   example: "FOREIGN KEY constraint failed. There is no entity with this Id"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/cards/{id}:
 *   put:
 *     summary: Sets a name of a card
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: A parameter by which a card name will be edited
 *     requestBody:
 *       description: A name to be edited.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: The card was updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Card'
 *               properties:
 *                 id: 
 *                   type: integer
 *                   example: 1
 *                 message: 
 *                   type: string
 *                   example: "Card updated"
 *       400:
 *         description: Card data validation error or not defined
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Error'
 *               properties:
 *                 statusCode: 
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "undefined-card"
 *                 message: 
 *                   type: string
 *                   example: "Card in not defined"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/cards/complete/{id}:
 *   put:
 *     summary: Edits existing card's isCompleted property by its id
 *     tags: [Cards]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: A parameter by which a card will be edited
 *     requestBody:
 *       description: Task to be edited.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - isCompleted 
 *             properties:
 *               idCompleted:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: The card was updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Card'
 *               properties:
 *                 id: 
 *                   type: integer
 *                   example: 1
 *                 message: 
 *                   type: string
 *                   example: "Card updated"
 *       400:
 *         description: Card data validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Error'
 *               properties:
 *                 statusCode: 
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "undefined-card"
 *                 message: 
 *                   type: string
 *                   example: "Card in not defined"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/cards/{id}:
 *   delete:
 *     summary: Deletes single card by its id
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Existing card id
 *     responses:
 *       200:
 *         description: Card deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Card'
 *               properties:
 *                 id: 
 *                   type: integer
 *                   example: 1
 *                 message: 
 *                   type: string
 *                   example: "Card updated"
 *       400:
 *         description: Card is not defined
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Error'
 *               properties:
 *                 statusCode: 
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "undefined-card"
 *                 message: 
 *                   type: string
 *                   example: "Card in not defined"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Error'
 */
